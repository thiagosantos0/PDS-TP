const { articleRepository } = require("../repositories");

module.exports = {
    createArticle: async (articleDetails) => {
        const {
            userId,
            title,
            description,
            content,
            image
        } = articleDetails;

        const newUser = await articleRepository.createNewInstance({
            userId,
            title,
            description,
            content,
            image,
        });

        return { newUser };     
    },

    getArticle: async (requestDetails) => {
        const articleId = requestDetails.id;

        const article = await articleRepository.getById(articleId);

        if (!article) {
            throw {
                status: StatusCodes.NOT_FOUND,
                message: "Article not found; id = " + articleId
            };
        }

        return { article };      
    },

    getArticleByUser: async (requestDetails) => {
        let query;
        query.userId = requestDetails.id;

        const articles = await articleRepository.getAllByField(query);

        return { articles };      
    },
    
    getAllArticles: async () => {
        // verify
        const articles = await articleRepository.getAll();
        
        return { articles };      
    },

    updateArticle: async (articleDetails, requestDetails) => {
        const articleId = requestDetails.id;

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

    autodeleteArticle: async (requestDetails) => {
        const { id } = requestDetails;

        const deleteResponse = await articleRepository.deleteInstanceById(id);

        return {
            message: "Article deleted with success",
            deleteResponse
        };
    }
};