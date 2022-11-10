const { userRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

module.exports = {
    signup: async (userDetails) => {
        const {
            name,
            email,
            password,
        } = userDetails;

        const userWithEmail = await userRepository.getOneByField({ email });
        if (userWithEmail) {
            throw {
                status: StatusCodes.CONFLICT,
                message: "already exists an user with this email = " + email
            }
        }

        const newUser = await userRepository.createNewInstance({
            name,
            email,
            password,
        });

        return { newUser };     
    },

    login: async (userDetails) => {
        const { email, password } = userDetails;

        const user = await userRepository.getOneByField({ email });

        if (!user) {
            throw {
                status: StatusCodes.NOT_FOUND,
                message: "user not found; email = " + email
            }
        }

        const validPassword = password == user.password

        if (!validPassword) {
            throw {
                status: StatusCodes.UNAUTHORIZED,
                message: "invalid password"
            }
        }

        return {
            status: StatusCodes.OK,
        };
    },
};