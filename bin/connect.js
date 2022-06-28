const mongoose = require("mongoose");
//intentamos conectarnos
try{
  //se intenta establecer una conexion con los datos de conexion.
  //usuario:"Jpadilla" - contraseña:"PG6iuE3RITaoAZMK"
 
  mongoose.connect("mongodb+srv://Jpadilla:PG6iuE3RITaoAZMK@cluster0.tlokflq.mongodb.net/?retryWrites=true&w=majority",
      {useNewUrlParser: true}
  );
  // en caso de establece la conexion, se muestra en la consola este mensaje
  console.log("Conected databases.");
                   
} catch (e) {
  //en caso de haber un error se muestra en la consola dicho error
  console.error (e);
}



