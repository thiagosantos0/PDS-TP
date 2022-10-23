const sequelize = require(`${__dirname}/models`);

async function build(){
    await sequelize.models.User.sync();
    await sequelize.models.Article.sync();

    //Definindo os autores (Test)
    sequelize.models.User.create({
        id: 1,
        name: 'Kobayashi',
        email: "teste@gmail.com",
        password: "teste"
    });


    // Definindo os artigos (Test)
    sequelize.models.Article.create({
        id: 0,
        title: 'Article1',
        description: "article description",
        content: "article content",
        image: "article image",
        ID_Author: "id do autor"
    });

}

build()