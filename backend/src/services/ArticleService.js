const { articleRepository } = require("../repositories");

module.exports = {
    createArticle: async (articleDetails) => {
        const {
            userId,
            title,
            description,
            content,
            image,
            updatedAt
        } = articleDetails;

        const newUser = await articleRepository.createNewInstance({
            userId,
            title,
            description,
            content,
            image,
            updatedAt
        });

        return { newUser };     
    },

    getArticle: async (articleId) => {

        const article = await articleRepository.getById(articleId);

        if (!article) {
            throw {
                status: StatusCodes.NOT_FOUND,
                message: "Article not found; id = " + articleId
            };
        }

        return { article };      
    },

    getArticleByUser: async (userId) => {
        let query = {};
        query.userId = userId;

        const articles = await articleRepository.getAllByField(query);

        return { articles };      
    },
    
    getAllArticles: async () => {
        // verify
        const articles = await articleRepository.getAll();
        
        return { articles };      
    },

    updateArticle: async (articleDetails, articleId) => {

        const articleToBeUpdated = await articleRepository.getById(articleId);

        if (!articleToBeUpdated) {
            throw {
                status: StatusCodes.NOT_FOUND,
                message: "Article not found; id = " + articleId
            };
        }

        const updatedResponse = await articleRepository.updateInstance(articleToBeUpdated, articleDetails);

        return { updatedResponse };
    },

    autodeleteArticle: async (articleId) => {

        const deleteResponse = await articleRepository.deleteInstanceById(articleId);

        return {
            message: "Article deleted with success",
            deleteResponse
        };
    }
};