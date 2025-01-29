const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const Usuario = require('../models/usuario'); 


const registrarUsuario = async (req, res) => {
    const { nombre, email, contraseña } = req.body;

    if (!nombre || !email || !contraseña) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    try {
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El usuario ya está registrado' });
        }

        const salt = await bcrypt.genSalt(10);
        const contraseñaEncriptada = await bcrypt.hash(contraseña, salt);

        const nuevoUsuario = new Usuario({
            nombre,
            email,
            contraseña: contraseñaEncriptada
        });

        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};


const iniciarSesion = async (req, res) => {
    try {
        const { email, contraseña } = req.body;

        
        if (!email || !contraseña) {
            return res.status(400).json({ mensaje: 'Email y contraseña son obligatorios' });
        }

        console.log('Datos recibidos:', { email, contraseña });

      
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        
        const esContraseñaCorrecta = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!esContraseñaCorrecta) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        
        const tokenGenerado = jwt.sign(
            { id: usuario._id, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );

        res.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            token: tokenGenerado,
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};




 module.exports = { registrarUsuario, iniciarSesion };
