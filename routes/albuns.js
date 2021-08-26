const express = require('express');
const router = express.Router();
const albunsController = require('../controllers/albunsController');
const artistasController = require('../controllers/artistasController');
const verificarLogin = require('../middleware/verificarLogin');

/* GET home page. */
router.get('/', verificarLogin, async (req, res, next)=>{

  const albuns = await albunsController.listarTodos();

  res.render('albuns', { albuns, usuario: req.session.usuario});
});

router.get('/logout', function(req, res, next){
  req.session.destroy();
  res.redirect('/users')
});

  
router.get('/editar/:id', async(req,res,next)=>{
  const {id} = req.params
 const albuns = await albunsController.buscarPorId({id});
 const artistas = await artistasController.listarTodos();
  res.render('editar', {albuns,artistas})
})

router.put('/editar/:id', async(req,res,next)=>{
  const {id} = req.params
  const {titulo,artista} = req.body;
  await albunsController.atualizarAlbum({id,titulo,artista})
  res.redirect('/')
})
router.get('/cadastro', async(req,res,next)=>{
  const artistas = await artistasController.listarTodos();
  res.render('cadastro',{artistas})
})
router.post('/cadastro', async(req,res,next)=>{
const{titulo,artista}=req.body
await albunsController.cadastrarAlbum({titulo,artista})
res.redirect('/')
})
router.delete('/excluir/:id', async(req,res,next)=>{
  const {id} = req.params;
  await albunsController.excluirAlbum(id);
  res.redirect('/')
})
router.get('/search', async(req,res,next)=>{
  const {key} = req.query;
  const albuns = await albunsController.pesquisar(key);
  return res.render('albuns', { albuns, usuario: req.session.usuario});
})
module.exports = router;
