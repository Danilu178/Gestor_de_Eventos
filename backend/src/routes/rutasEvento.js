const express = require('express');
const router = express.Router();
const controladorEvento = require('../controllers/controladorEventos'); 
const middlewareAutenticacion = require('../middleware/middlewareAutenticacion'); 


router.post('/crear', middlewareAutenticacion, controladorEvento.crearEvento);


router.get('/', controladorEvento.obtenerEventos);


router.get('/:id', controladorEvento.obtenerEventoPorId);


router.put('/:id', middlewareAutenticacion, controladorEvento.actualizarEvento);


router.delete('/:id', middlewareAutenticacion, controladorEvento.eliminarEvento);

module.exports = router;
