const db = require('../models/index');

async function build(){
    await db.models.User.sync();
    await db.models.Article.sync();

    //Definindo os autores (Test)
    db.models.User.create({
        name: 'Kobayashi',
        email: "teste@gmail.com",
        password: "teste"
    });


    // Definindo os artigos (Test)
    db.models.Article.create({
        id: 0,
        title: 'React Article',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum non diam eget posuere. Maecenas malesuada vitae turpis id malesuada. Donec ornare nibh a nunc facilisis, non porttitor felis convallis.',
        content: "article content",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        ID_Author: 0,
        updatedAt: '2022-04-25 21:48:56'
    });

    db.models.Article.create({
        id: 1,
        title: 'MySql Article',
        description: 'Suspendisse varius odio eget posuere auctor. Aenean nec purus ipsum. Integer orci tellus, blandit et mauris id, efficitur ornare nunc. Nulla et ex vel odio aliquet tempus. Sed tortor metus, viverra ac enim sit amet, dignissim efficitur tellus.',
        content: "article content",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png',
        ID_Author: 0,
        updatedAt: '2022-10-08 19:06:2'
    });

    db.models.Article.create({
        id: 2,
        title: 'Express Article',
        description: 'Aliquam viverra sapien sed diam fermentum pellentesque. Nulla maximus enim a turpis sollicitudin lobortis. Praesent ut leo feugiat, tempor libero quis, lacinia libero. Duis nec dapibus nulla.',
        content: "article content",
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        ID_Author: 0,
        updatedAt: '2022-06-18 11:50:28'
    });

    db.models.Article.create({
        id: 3,
        title: 'Node Article',
        description: 'Cras tincidunt lectus quis sem gravida sodales. Donec malesuada erat ut tellus tempus, nec vestibulum odio vulputate.',
        content: "article content",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        ID_Author: 0,
        updatedAt: '2022-09-02 12:08:43'
    });
}

module.exports = build();