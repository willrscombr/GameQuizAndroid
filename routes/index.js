var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Partida = mongoose.model('Partida');
var Pergunta = mongoose.model('Pergunta');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'login',{ mensagem: 'Autenticação de usuário' });
});
router.post('/login',function (req,res,next) {
    var usuario = req.body.usuario;
    var senha = req.body.senha;
    console.log("usuario: "+ usuario + "senha: "+senha);
    if(usuario == 'admin' && senha == 'admin'){
      res.render('index');
    }else{
      res.render('login',{mensagem:'Erro na autenticação'});
    }
});
router.get('/pergunta',function (req,res,next) {
  res.render('pergunta');
});
router.post('/pergunta',function (req,res,next) {
  var pergunta = req.body;
  Pergunta.create(pergunta,function (err, pergunta) {
    if(err) {
      res.send(err);
      console.log(err);
    }
    res.json(pergunta);
  });

});
router.get('/perguntas',function (req,res) {
  Pergunta.find(function (err,perguntas) {
    if(err){
      res.send(err);
    }
    res.json(perguntas);
  });

});

router.get('/partida',function (req,res) {
  var jogador = req.query.jogador;
  var pontos =  req.query.pontos;

  Partida.create({
    jogador: jogador ,
    pontos: pontos,
    done:false
  },function(err,partidas){
    if (err){
      console.log(err);
    }else
    res.json(partidas);
  });

});

router.get('/partidas',function (req,res) {

  Partida.find(function (err,partidas) {
    if(err){
      res.send(err);
    }
    res.json(partidas);
  });

});

router.get('/partida/remove',function (req,res) {

  Partida.remove({
    id: req.query.id

  },function(err,partidas){
    if (err){
      res.send(err);
    }
    res.json(partidas);
  });
});

router.get('/partida/remove/nome',function (req,res) {

  Partida.remove({
    jogador: req.query.jogador

  },function(err,partidas){
    if (err){
      res.send(err);
    }
    res.json(partidas);
  });
});

router.get('/partidas/remove',function (req,res) {
  Partida.remove({},callback);
  res.json({removido:true});
});




module.exports = router;
