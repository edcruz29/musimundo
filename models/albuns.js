const db = require("../database/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.listarTodos = () =>
  db.Album.findAll({
   /* include:{
      model:db.Artista,
      as:'artista',
      required:true
    },*/
  } 
  ).then((rows) => rows.map((row) => row.dataValues));

exports.editar =({id})=> 
db.Album.findByPk(id);

exports.cadastrarNovoAlbum = ({titulo,id_artista}) =>
  db.Album.create({titulo,id_artista});

exports.atualizarAlbum = ({id, titulo,id_artista})=>
  db.Album.update({titulo,id_artista}, {where:{id}});

exports.excluirAlbum = (id)=> db.Album.destroy({where:{id}});

exports.filtrar = key=> db.Album.findAll(
  {where:
    {titulo:
      {[Op.like]:`%${key}%`}}}).then((rows) => rows.map((row) => row.dataValues));