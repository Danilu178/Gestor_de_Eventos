const Event = require('../models/evento'); 


const crearEvento = async (req, res) => {
    const { titulo, descripcion, fecha, ubicacion } = req.body;

    try {
       
        const eventoExistente = await Event.findOne({ titulo });
        if (eventoExistente) {
            return res.status(400).json({ mensaje: 'Ya existe un evento con este título' });
        }

        const fechaSinHora = new Date(fecha);  
        fechaSinHora.setHours(0, 0, 0, 0); 

       
        const nuevoEvento = new Event({
            titulo,
            descripcion,
            fecha: fechaSinHora,
            ubicacion,
        });
        


        
        await nuevoEvento.save();
        const fechaFormateada = nuevoEvento.fecha.toISOString().split('T')[0];

        res.status(201).json({ mensaje: 'Evento creado con éxito', evento: { ...nuevoEvento.toObject(), fecha: fechaFormateada } });
    } catch (error) {
        console.error('Error al crear evento:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};


const obtenerEventos = async (req, res) => {
    try {
        const eventos = await Event.find(); 
        res.status(200).json({ eventos });
    } catch (error) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};


const obtenerEventoPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const evento = await Event.findById(id);
        if (!evento) {
            return res.status(404).json({ mensaje: 'Evento no encontrado' });
        }
        res.status(200).json({ evento });
    } catch (error) {
        console.error('Error al obtener evento:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};


const actualizarEvento = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, fecha, ubicacion } = req.body;

    try {
        
        const eventoActualizado = await Event.findByIdAndUpdate(
            id,
            { titulo, descripcion, fecha, ubicacion },
            { new: true } 
        );

        if (!eventoActualizado) {
            return res.status(404).json({ mensaje: 'Evento no encontrado' });
        }

        res.status(200).json({ mensaje: 'Evento actualizado', evento: eventoActualizado });
    } catch (error) {
        console.error('Error al actualizar evento:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};


const eliminarEvento = async (req, res) => {
    const { id } = req.params;

    try {
        const eventoEliminado = await Event.findByIdAndDelete(id);
        if (!eventoEliminado) {
            return res.status(404).json({ mensaje: 'Evento no encontrado' });
        }

        res.status(200).json({ mensaje: 'Evento eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar evento:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

module.exports = {
    crearEvento,
    obtenerEventos,
    obtenerEventoPorId,
    actualizarEvento,
    eliminarEvento,
};
