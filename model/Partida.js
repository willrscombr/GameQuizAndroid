/**
 * Created by 2898807 on 23/09/2016.
 */

var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');



var PartidaSchema = new mongoose.Schema({
    idp: Number,
    jogador: String,
    pontos: Number,
},{_id:false, __v:false});
PartidaSchema.plugin(AutoIncrement,{inc_field: 'idp'});
mongoose.model('Partida',PartidaSchema);
