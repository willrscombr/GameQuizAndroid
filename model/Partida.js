/**
 * Created by will on 29/09/16.
 */
var mongoose = require('mongoose');

var PartidaSchema = mongoose.Schema({
    jogador: String,
    pontos: Number
});

mongoose.exports('Partida',PartidaSchema);