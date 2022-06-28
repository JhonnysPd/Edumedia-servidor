const Usuario = require("./models/Usuarios");

// crear un estudiante
const postUsuario = (usuarios, res)=> {
  Usuario.create(usuarios, (err, e)=>{
    if(err) throw err
    res.send(e);
  })
}

// traer todos los estudiantes
const getUsuarios = (res)=> {
  Usuario.find({}, (err, e)=> {
    if(err) throw err
    res.send(e);
  })
}

// traer un estudiante por su id
const getUsuarioPorId = (id, res)=> {
  Usuario.find({_id:id}, (err, e)=>{
    if(err) throw err
    res.send(e);
  })
}

// actulizar un estudiante por su id 
const updateUsuarioPorId = (id, usuarios, res)=> {
  Usuario.findByIdAndUpdate({_id:id}, usuarios, (err, e)=>{
    if(err) throw err
    res.send(e);
  })
}

// eliminar un estudiante por su id
const deleteUsuarioPorId = (id, res)=> {
  Usuario.findByIdAndDelete({_id:id}, (err, e)=>{
    if(err) throw err
    res.send(e);
  })
}

module.exports = {
  postUsuario,
  getUsuarios,
  getUsuarioPorId,
  updateUsuarioPorId,
  deleteUsuarioPorId
}
