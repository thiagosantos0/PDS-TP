const { StatusCodes } = require("http-status-codes");
const { articleService } = require("../services");

module.exports = {
    create: async (req, res) => {
        try {
            const createResponse = await articleService.createArticle(req.body);

            return res.status(StatusCodes.OK).json(createResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },

    getArticle: async (req, res) => {
        try {
            const getResponse = await articleService.getArticle(req.params.id);

            return res.status(StatusCodes.OK).json(getResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },

    getAllArticles: async (req, res) => {
        try {
            const getAllResponse = await articleService.getAllArticles();

            return res.status(StatusCodes.OK).json(getAllResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },
    
    getArticleByUser: async (req, res) => {
        try {
            const getResponse = await articleService.getArticleByUser(req.params.id);

            return res.status(StatusCodes.OK).json(getResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },

    updateArticle: async (req, res) => {
        try {
            const getResponse = await articleService.updateArticle(req.params.id);

            return res.status(StatusCodes.OK).json(getResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },

    autodeleteArticle: async (req, res) => {
        try {
            const deleteResponse = await articleService.autodeleteArticle(req.params.id);

            return res.status(StatusCodes.OK).json(deleteResponse);         
        } catch (error) {
            console.error(error);
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.message);
        }
    },
};