const mongoose = require('mongoose'); 
const { Schema } = mongoose; 


const usuarioSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true } 
});


const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
