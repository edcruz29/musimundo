const db = require("../database/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.listarTodos = () =>
  db.Album.findAll({
   include:{
      model:db.Artista,
      as:'artista',
      required:true,
      
    },distinct: true
  } 
  );

exports.editar =({id})=> 
db.Album.findByPk(id,{
  include:{
    model:db.Artista,
    as:'artista',
    required:true,
  }
});

exports.cadastrarNovoAlbum = async ({titulo,artista}) =>{
 const buscarArtista = await db.Artista.findOne({
    where: {
      nome:artista
    }
    
  })
  if(!buscarArtista){
    throw new Error('Artista Não Encontrado');
  }
  const id_artista = buscarArtista.id
  db.Album.create({titulo,id_artista})
}
/*
exports.cadastrarNovoAlbum = async ({titulo,artista}) =>{
  const buscarArtista = await db.Artista.findOne({
    where: {
      nome:artista
    }
});
console.log(buscarArtista);
await buscarArtista.createAlbuns({titulo})
}*/


exports.atualizarAlbum = async ({id, titulo,artista})=>{
const buscarArtista = await db.Artista.findOne({
  where: {
    nome:artista
  }
  
})
if(!buscarArtista){
  throw new Error('Artista Não Encontrado');
}
  const id_artista = buscarArtista.id

  db.Album.update({titulo,id_artista}, {where:{id}})}


exports.excluirAlbum = (id)=> db.Album.destroy({where:{id}});

exports.filtrar = key=> db.Album.findAll(
  { include:{
    model:db.Artista,
    as:'artista',
    required:true
  },
    where:
    {titulo:
      {[Op.like]:`%${key}%`}}}).then((rows) => rows.map((row) => row.dataValues));