const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//un esquema es la estructura de datos de nuestra coleccion, definimos los tipos de datos y sus relaciones.

const UsuariosSchema = new Schema (
  {
    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,

    // un usuario a muchas imagenes [array]
    imagenes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Imagenes"
      }
    ]
  }
);

// esxportamos el modelo

var Usuarios = mongoose.model("Usuarios", UsuariosSchema);
module.exports = Usuarios;