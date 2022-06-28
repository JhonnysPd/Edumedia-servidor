const express = require("express");
const app = express()
const PORT = 3001;

require("./bin/connect");
require("./bin/middleware")(app);
require("./bin/routes")(app)

app.listen(PORT, ()=>{
  console.log("El servidor esta levantado");
});