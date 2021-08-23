const albunsModel = require("../models/albuns");

exports.listarTodos = () => albunsModel.listarTodos();
exports.buscarPorId = (id) => albunsModel.editar(id);
exports.atualizarAlbum=({id,titulo, id_artista})=>albunsModel.atualizarAlbum({id,titulo, id_artista})
exports.cadastrarAlbum=({titulo,id_artista})=>albunsModel.cadastrarNovoAlbum({titulo, id_artista});
exports.excluirAlbum=(id)=>albunsModel.excluirAlbum(id);
exports.pesquisar=(key)=>albunsModel.filtrar(key);