const db = require("../config/db");
const { ObjectId } = require("mongodb");

class UserDAO {
    
    constructor() {
        this.collection = db.obtenerColeccion("users");
    }

    async crearUser(user) {
        await db.conectar();
        await this.collection.insertOne(user);
        db.desconenctar();

        const usuarios = await this.obtenerTodos();
        const idNuevoUsuario = usuarios[usuarios.length - 1]._id;

        return idNuevoUsuario;
    }

    async actualizarUser(id, user) {
        await db.conectar();
        await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: user });
        db.desconenctar();
    }

    async eliminarUser(id) {
        await db.conectar();
        await this.collection.deleteOne({ _id: new ObjectId(id) });
        db.desconenctar();
    }

    async obtenerTodos() {
        await db.conectar();
        const usuarios = await this.collection.find().toArray();
        db.desconenctar();

        return usuarios;
    }

    async obtenerUserPorId(id) {
        await db.conectar();
        const usuario = await this.collection.findOne({ _id: new ObjectId(id) })
        db.desconenctar();
        
        return usuario;
    }
}

module.exports = new UserDAO();