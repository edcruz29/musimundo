const db = require('../database/models');
const usuarios = require('../database/models');

exports.criarUsuario = ({nome,email,hashed})=>{
  const usuario= db.Usuario.create({nome,email,hashed})
    return usuario;
}
exports.buscarUsuario = async ({email})=>{
    const usuario = await db.Usuario.findOne({
        where: { email }}
    );
   return usuario
}

