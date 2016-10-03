var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Partida = mongoose.model('Partida');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send( { title: 'Express' });
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
      res.send(err);
    }
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
