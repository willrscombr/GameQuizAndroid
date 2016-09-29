var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/partidas', function(req, res, next) {
  res.json({ title: 'Express', id: '1', jogador:'Winton', pontos:'200' });
});

router.get('/partida', function(req, res, next) {
  var jogador = req.query.jogador;
  var pontos = req.query.pontos;
  res.render('index', { title: 'Express' });
});



module.exports = router;
