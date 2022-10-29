class Article {
    constructor(id, title, description, content, image, id_author) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.image = image;
        this.id_author = id_author;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getContent() {
        return this.content;
    }

    getImage() {
        return this.image;
    }

    getIdAuthor() {
        return this.id_author;
    }
}

module.exports = Article;