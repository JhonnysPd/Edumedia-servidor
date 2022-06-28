const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//un esquema es la estructura de datos de nuestra coleccion, definimos los tipos de datos y sus relaciones.

const ImagenesSchema = new Schema ({
  resolucion: String,
  formato: String,
  tag: String,

    // vinculamos el estudiantes a muchas notas [array]
  usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario"
    }
  
});

// esxportamos el modelo

var Imagenes = mongoose.model("Imagenes", ImagenesSchema);
module.exports = Imagenes;