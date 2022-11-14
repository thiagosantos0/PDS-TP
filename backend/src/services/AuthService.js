const { userRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

module.exports = {
  signup: async (userDetails) => {
    const { name, email, password } = userDetails;
    console.log("email = " + { email: email });
    const userWithEmail = await userRepository.getOneByField({ email: email });
    if (userWithEmail) {
      throw {
        status: StatusCodes.CONFLICT,
        message: "already exists an user with this email = " + email,
      };
    }

    const newUser = await userRepository.createNewInstance({
      name,
      email,
      password,
    });

    console.log("Usuário criado no service");
    return { newUser };
  },

  login: async (userDetails) => {
    const { email, password } = userDetails;

    const user = await userRepository.getOneByField({ email });

    if (!user) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: "user not found; email = " + email,
      };
    }

    const validPassword = password == user.password;

    if (!validPassword) {
      throw {
        status: StatusCodes.UNAUTHORIZED,
        message: "invalid password",
      };
    }

    const userInfo = {
      id: user.id,
      name: user.name,
    };

    return { userInfo };
  },

  generateToken: async (userDetails) => {
    const token = jwt.sign({ user: userDetails }, "secretkey", {
      expiresIn: "7d",
    });
    return token;
  },

  verifyToken: async (req) => {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies["jwt"];
    }

    if (token) {
      const decodedToken = jwt.verify(token, "secretkey");
      req.user = decodedToken.user;
    }

    if (!req.user) {
      throw {
        status: StatusCodes.UNAUTHORIZED,
        message: "you need to log in",
      };
    }
  },
};
