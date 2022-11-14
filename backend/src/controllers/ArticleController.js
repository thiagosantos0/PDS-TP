const { StatusCodes } = require("http-status-codes");
const { articleService, userService } = require("../services");

module.exports = {
  create: async (req, res) => {
    try {
      const createResponse = await articleService.createArticle(req.body);

      return res.status(StatusCodes.OK).json(createResponse);
    } catch (error) {
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },

  getArticle: async (req, res) => {
    try {
      const getResponse = await articleService.getArticle(req.params.id);

      return res.status(StatusCodes.OK).json(getResponse);
    } catch (error) {
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },

  getAllArticles: async (req, res) => {
    try {
      const getAllResponse = await articleService.getAllArticles();
      const allWithUserName = await Promise.all(
        getAllResponse.articles.map(async (article) => {
          const { user } = await userService.getUser(article.userId);
          article.userName = user.name;
          return article;
        })
      );

      return res.status(StatusCodes.OK).json({ articles: allWithUserName });
    } catch (error) {
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },

  getArticleByUser: async (req, res) => {
    try {
      const getResponse = await articleService.getArticleByUser(req.params.id);

      const allWithUserName = await Promise.all(
        getResponse.articles.map(async (article) => {
          const { user } = await userService.getUser(article.userId);
          article.userName = user.name;
          return article;
        })
      );

      return res.status(StatusCodes.OK).json(allWithUserName);
    } catch (error) {
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },

  updateArticle: async (req, res) => {
    try {
      const getResponse = await articleService.updateArticle(
        req.body,
        req.params.id
      );

      return res.status(StatusCodes.OK).json(getResponse);
    } catch (error) {
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },

  autodeleteArticle: async (req, res) => {
    try {
      const deleteResponse = await articleService.autodeleteArticle(
        req.params.id
      );

      return res.status(StatusCodes.OK).json(deleteResponse);
    } catch (error) {
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
  },
};
