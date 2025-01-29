const mongoose = require('mongoose');


const eventoSchema = new mongoose.Schema(
    {
        titulo: { type: String, required: true, unique: true, trim: true},
        descripcion: { type: String, required: true, trim: true},
        fecha: { type: Date, required: true},
        ubicacion: { type: String, required: true, trim: true},
    },
    
);


const Event = mongoose.model('Event', eventoSchema);
module.exports = Event;
