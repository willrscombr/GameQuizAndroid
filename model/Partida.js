/**
 * Created by 2898807 on 23/09/2016.
 */

var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');



var PartidaSchema = new mongoose.Schema({
    jogador: String,
    pontos: Number,
});
PartidaSchema.plugin(AutoIncrement, {inc_field: 'id'});
mongoose.model('Partida',PartidaSchema);
