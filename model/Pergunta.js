/**
 * Created by 2898807 on 23/09/2016.
 */

var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');



var PerguntaSchema = new mongoose.Schema({
    id: Number,
    questao: String,
    resposta1: String,
    resposta2: String,
    resposta3: String,
    resposta4: String,
    respostacerta: Number
},{_id:false, versionkey:false});
PerguntaSchema.plugin(AutoIncrement,{inc_field: 'id'});
mongoose.model('Pergunta',PerguntaSchema);
