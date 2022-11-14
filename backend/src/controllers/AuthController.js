const { StatusCodes } = require("http-status-codes");
const { authService } = require("../services");

module.exports = {
  signup: async (req, res) => {
    try {
      const signupResponse = await authService.signup(req.body);

      return res.status(StatusCodes.OK).json(signupResponse);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name === "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },

  login: async (req, res) => {
    try {
      const userInfo = await authService.login(req.body);
      const token = await authService.generateToken(userInfo);
      return res
        .cookie("jwt", token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json(userInfo);
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name === "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },

  isLoggedIn: async (req, res, next) => {
    try {
      await authService.verifyToken(req);
      next();
    } catch (error) {
      console.error(error);
      return res
        .status(
          error.name === "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
  getAuthStatus: async (req, res) => {
    try {
      return res.json(req.user);
    } catch (error) {
      return res
        .status(
          error.name === "ValidationError"
            ? StatusCodes.UNPROCESSABLE_ENTITY
            : error.status || StatusCodes.INTERNAL_SERVER_ERROR
        )
        .json(error.message);
    }
  },
};
