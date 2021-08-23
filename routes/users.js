const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const verificarLogin = require('../middleware/verificarLogin')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { session } = req;
  console.log(req.session.usuario)
  res.render('login')
});
router.get('/cadastro', (req,res,next)=>{
  res.render('cadastroUsuario')
});

router.post('/cadastro', async (req,res,next)=>{
  const {nome,email,senha,confirmar} = req.body;
 const usuario = await usuariosController.criarUsuario(nome, email, senha,confirmar);
 req.session.usuario = usuario.nome
 res.redirect('/');
  
})
router.post("/login", async (req, res, next)=> {
  const { email, senha} = req.body;
  const usuario = await usuariosController.validarUsuario({email,senha});
  req.session.usuario=usuario;
  res.redirect('/');
});
module.exports = router;
