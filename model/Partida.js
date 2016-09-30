/**
 * Created by 2898807 on 23/09/2016.
 */

var mongoose = require('mongoose');


var PartidaSchema = new mongoose.Schema({
    jogador: String,
    pontos: Number,
});

mongoose.model('Partida',PartidaSchema);
