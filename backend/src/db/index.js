const { articleService, authService } = require("../services");
const db = require("../models");

module.exports = {
  buildDB: async () => {
    await db.sequelize.models.Article.sync({ force: true });
    await db.sequelize.models.User.sync({ force: true });
    //Definindo os autores (Test)

    try {
      await authService
        .signup({
          name: "Kobayashi",
          email: "teste@gmail.com",
          password: "teste",
        })
        .then(() => {
          console.log("Usuário criado");
        });
    } catch (error) {
      console.log("falha criando usuário " + error);
    }

    try {
      await articleService.createArticle({
        title: "React Article",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum non diam eget posuere. Maecenas malesuada vitae turpis id malesuada. Donec ornare nibh a nunc facilisis, non porttitor felis convallis.",
        content: "article content",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        userId: 1,
        updatedAt: "2022-04-25 21:48:56",
      });
    } catch (error) {
      console.log("falha criando artigo 1 " + error);
    }

    try {
      await articleService.createArticle({
        title: "MySql Article",
        description:
          "Suspendisse varius odio eget posuere auctor. Aenean nec purus ipsum. Integer orci tellus, blandit et mauris id, efficitur ornare nunc. Nulla et ex vel odio aliquet tempus. Sed tortor metus, viverra ac enim sit amet, dignissim efficitur tellus.",
        content: "article content",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png",
        userId: 1,
        updatedAt: "2022-10-08 19:06:2",
      });
    } catch (error) {
      console.log("falha criando artigo 2 " + error);
    }

    try {
      await articleService.createArticle({
        title: "Express Article",
        description:
          "Aliquam viverra sapien sed diam fermentum pellentesque. Nulla maximus enim a turpis sollicitudin lobortis. Praesent ut leo feugiat, tempor libero quis, lacinia libero. Duis nec dapibus nulla.",
        content: "article content",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        userId: 1,
        updatedAt: "2022-06-18 11:50:28",
      });
    } catch (error) {
      console.log("falha criando artigo 3 " + error);
    }

    try {
      await articleService.createArticle({
        title: "Node Article",
        description:
          "Cras tincidunt lectus quis sem gravida sodales. Donec malesuada erat ut tellus tempus, nec vestibulum odio vulputate.",
        content: "article content",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        userId: 1,
        updatedAt: "2022-09-02 12:08:43",
      });
    } catch (error) {
      console.log("falha criando artigo 4 " + error);
    }
  },

}
