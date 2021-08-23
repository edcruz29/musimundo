const express = require('express');
const router = express.Router();
const albunsController = require('../controllers/albunsController');
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
  res.render('editar', {albuns})
})

router.put('/editar/:id', async(req,res,next)=>{
  const {id} = req.params
  const {titulo,id_artista} = req.body;
  await albunsController.atualizarAlbum({id,titulo,id_artista})
  res.redirect('/')
})
router.get('/cadastro', (req,res,next)=>{
  res.render('cadastro')
})
router.post('/cadastro', async(req,res,next)=>{
const{titulo,id_artista}=req.body
await albunsController.cadastrarAlbum({titulo,id_artista})
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
  return res.render('albuns', {albuns});
})
module.exports = router;
