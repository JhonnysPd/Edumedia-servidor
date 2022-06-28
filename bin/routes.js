const controller = require("./controller")

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send('pagina principal')
  })

  // traer todos los estudiantes
  app.get("/usuarios", (req, res) => {
    controller.getUsuarios(res)
  })

  // crear un estudiante
  app.post("/usuarios", (req, res) => {
    let usuarios = req.body;
    controller.postUsuario(usuarios, res)
  })

  // traer estudiantes por su id
  app.get("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    controller.getUsuarioPorId(id, res)
  })

  // modificar un estudiante 
  app.put("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    let estudiante = req.body;
    controller.updateUsuarioPorId(id, estudiante, res)
  })

  // eliminar un estudiante
  app.delete("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    controller.deleteUsuarioPorId(id, res)
  })
}


