const { StatusCodes } = require("http-status-codes");
const { userService } = require("../services");

module.exports = {
    getUser: async (req, res) => {
        try {
            const getResponse = await userService.getUser(req.body);

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
            const getResponse = await userService.updateUser(req.body);

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
            const deleteResponse = await userService.autodeleteUser(req.body);

            return res.status(StatusCodes.OK).json(deleteResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },
};