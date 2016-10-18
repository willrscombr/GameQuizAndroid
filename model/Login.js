var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');



var LoginSchema = new mongoose.Schema({
    idlogin: Number,
    usuario: String,
    senha: String,
    telefone: String
},{_id:false, versionkey:false});
LoginSchema.plugin(AutoIncrement,{inc_field: 'idlogin'});
mongoose.model('Login',LoginSchema);
