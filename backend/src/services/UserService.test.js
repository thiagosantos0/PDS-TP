const UserService = require("./UserService");
const truncateDB = require("../utils/test_db");

// beforeEach(() => {
//     truncateDB();
//   });

test('create', async () => {
    const usuario = {
        name: "eu",
        email: "eu@mail.com",
        password: "senha"
    }
    await UserService.createUser(usuario)
    const users = await UserService.getUser(2);
    expect(users.user.dataValues.id).toBe(2);
    expect(users.user.dataValues.name).toBe("eu");
    expect(users.user.dataValues.email).toBe("eu@mail.com");
});

// test('delete', async () => {
//     const users = await UserService.getUser(2);
//     console.log(users.user.dataValues);
//     expect(users.user.dataValues.id).toBe(2);
//     expect(users.user.dataValues.name).toBe("eu");
//     expect(users.user.dataValues.email).toBe("eu@mail.com");
// });