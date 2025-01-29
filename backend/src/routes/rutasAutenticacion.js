const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controllers/controladorAutenticacion');


router.post('/registro', controladorUsuario.registrarUsuario);
router.post('/iniciarsesion', controladorUsuario.iniciarSesion);

module.exports = router;