const UserDAO = require("./dataAccess/userDAO");
const User = require("./models/user");

async function main() {
    const user1 = new User("Martin", "martin.gpe@gmail.com");
    const user2 = new User("Martin2", "martin2.gpe@gmail.com");
    const user3 = new User("Martin3", "martin3.gpe@gmail.com");
    const user4 = new User("Martin4", "martin4.gpe@gmail.com");

    const idUser1 = await UserDAO.crearUser(user1);
    const idUser2 = await UserDAO.crearUser(user2);
    const idUser3 = await UserDAO.crearUser(user3);
    const idUser4 = await UserDAO.crearUser(user4);

    const usuarios = await UserDAO.obtenerTodos();
    console.log(usuarios);
    
    user2.username = "baba_yaga";
    user2.email = "john.wick@gmail.com";

    await UserDAO.actualizarUser(idUser2, user2);
    
    const nuevoUser2 = await UserDAO.obtenerUserPorId(idUser2);
    console.log(nuevoUser2);

    await UserDAO.eliminarUser(idUser4);

    const usuariosActualizados = await UserDAO.obtenerTodos();
    console.log(usuariosActualizados)
}

main();