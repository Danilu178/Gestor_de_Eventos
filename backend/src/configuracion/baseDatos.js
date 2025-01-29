const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const conectarBD = async () => {
    try {
        
        if (!process.env.MONGO_URL) {
            throw new Error('MONGO_URL no está definida en el archivo .env');
        }

        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conectado a la base de datos MongoDB');
        
    } catch (error) {
        console.error('Error en la conexión a MongoDB: ', error);
        process.exit(1);
    }
};

module.exports = conectarBD;
