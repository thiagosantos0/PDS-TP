const db = require('../../infraestrutura/db/MySql.js');


class UserService {

    create (user) {
        return db.models.User.create({
            name: user.name,
            email: user.email,
            password: user.password
        });
    }

    get () {
        return db.models.User.findAll();
    }

    get (id) {
        return db.models.User.findOne({
            where: { 
                id: id 
            } 
        });
    }

    update (id, user) {
        return db.models.User.update({
            name: user.name,
            email: user.email,
            password: user.password 
        }, {
            where: { _id: id } 
        });
    }
    
    delete (id) {
        return db.models.User.destroy({
            where: { 
                id: id 
            } 
        });
    }
}

module.exports = UserService;