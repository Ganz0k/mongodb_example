const { MongoClient } = require("mongodb");

class Database {
    
    constructor() {
        this.uri = "mongodb://127.0.0.1:27017/dbPruebas";
        this.options = {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        };
        this.cliente = new MongoClient(this.uri, this.options);
    }

    async conectar() {
        try {
            await this.cliente.connect();
            console.log("Conexión a MongoDB establecida");
        } catch (error) {
            console.log("Error al conectar a MongoDB: ", error);
        }
    }

    desconenctar() {
        try {
            this.cliente.close();
            console.log("Desconexión a MongoDB exitosa");
        } catch (error) {
            console.log("Error al desconectar a MongoDB: ", error);
        }
    }

    obtenerColeccion(nombre) {
        return this.cliente.db().collection(nombre);
    }
}

module.exports = new Database();