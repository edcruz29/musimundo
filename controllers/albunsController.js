const albunsModel = require("../models/albuns");

exports.listarTodos = () => albunsModel.listarTodos();
exports.buscarPorId = (id) => albunsModel.editar(id);
exports.atualizarAlbum=({id,titulo, artista})=>albunsModel.atualizarAlbum({id,titulo, artista})
exports.cadastrarAlbum=({titulo,artista})=>albunsModel.cadastrarNovoAlbum({titulo, artista});
exports.excluirAlbum=(id)=>albunsModel.excluirAlbum(id);
exports.pesquisar=(key)=>albunsModel.filtrar(key);