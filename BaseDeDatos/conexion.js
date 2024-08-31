const mongoose = require("mongoose");

const conexion = async () => {
    console.log("Iniciando conexión a MongoDB...");
    try {
        await mongoose.connect("AGREGAR STRING CONNECTION");
        console.log("Conectado correctamente a la base de datos mi_blog!!");
    } catch (error) {
        console.log("Error durante la conexión:", error);
        throw new Error("No se ha podido conectar a la base de datos");
    }
}

module.exports = {
    conexion
}
