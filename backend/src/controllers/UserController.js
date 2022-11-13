const { StatusCodes } = require("http-status-codes");
const { userService } = require("../services");
const UserService = require("../services/UserService");

module.exports = {
    createUser: async (req, res) => {
        try {
            const usuario = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            await UserService.createUser(usuario)
            res.status(200).end()
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },

    getUser: async (req, res) => {
        try {
            const getResponse = await userService.getUser(req.params.id);

            return res.status(StatusCodes.OK).json(getResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const getAllResponse = await userService.getAllUsers();

            return res.status(StatusCodes.OK).json(getAllResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            const getResponse = await userService.updateUser(req.params.id);

            return res.status(StatusCodes.OK).json(getResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },

    autodeleteUser: async (req, res) => {
        try {
            const deleteResponse = await userService.autodeleteUser(req.params.id);

            return res.status(StatusCodes.OK).json(deleteResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },
};