const db = require("../database/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.listarTodos = () =>
  db.Artista.findAll().then((rows) => rows.map((row) => row.dataValues));