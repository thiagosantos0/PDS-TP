const { articleService, authService } = require("../services");
const db = require("../models");

const truncateDB = async () => {
  // await db.sequelize.models.Article.destroy({ where: {}, truncate: true });
  // await db.sequelize.models.User.destroy({ where: {}, truncate: true });
  await db.sequelize.models.Article.sync({ force: true });
  await db.sequelize.models.User.sync({ force: true });
};

const createUser = async () => {
  await authService.signup({
    name: "Kobayashi",
    email: "test@email.com",
    password: "12345678",
  });
};

const createArticles = async () => {
  await articleService.createArticle({
    title: "MySql Article",
    description:
      "Suspendisse varius odio eget posuere auctor. Aenean nec purus ipsum. Integer orci tellus, blandit et mauris id, efficitur ornare nunc. Nulla et ex vel odio aliquet tempus. Sed tortor metus, viverra ac enim sit amet, dignissim efficitur tellus.",
    content: "article content",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png",
    userId: 1,
  });

  await articleService.createArticle({
    title: "Express Article",
    description:
      "Aliquam viverra sapien sed diam fermentum pellentesque. Nulla maximus enim a turpis sollicitudin lobortis. Praesent ut leo feugiat, tempor libero quis, lacinia libero. Duis nec dapibus nulla.",
    content: "article content",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    userId: 1,
  });

  await articleService.createArticle({
    title: "Node Article",
    description:
      "Cras tincidunt lectus quis sem gravida sodales. Donec malesuada erat ut tellus tempus, nec vestibulum odio vulputate.",
    content: "article content",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    userId: 1,
  });
};

const createContent = async () => {
  const content = JSON.stringify({
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere dui ac mi placerat, quis bibendum dui tempor. Vivamus ut orci id felis euismod semper et sed mi. Aliquam consectetur lobortis quam a suscipit. Curabitur efficitur tempus sem. Pellentesque volutpat arcu metus, eu volutpat urna tristique vel. Aliquam arcu est, convallis pharetra leo rutrum, feugiat facilisis justo. Proin ut magna nec libero posuere tempor. Ut ut nunc sit amet lacus pulvinar conguê.",
          },
        ],
      },
    ],
  });

  await articleService.createArticle({
    title: "MySql Article",
    description:
      "Suspendisse varius odio eget posuere auctor. Aenean nec purus ipsum. Integer orci tellus, blandit et mauris id, efficitur ornare nunc. Nulla et ex vel odio aliquet tempus. Sed tortor metus, viverra ac enim sit amet, dignissim efficitur tellus.",
    content,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png",
    userId: 1,
  });
};

switch (process.env.TEST_DB) {
  case "truncate":
    truncateDB().catch(console.error);
    break;
  case "adduser":
    createUser().catch(console.error);
    break;
  case "addarticles":
    createArticles().catch(console.error);
    break;
  case "addcontent":
    createContent().catch(console.error);
    break;
  default:
    console.log("Invalid argument");
}
