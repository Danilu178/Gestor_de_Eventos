const express = require('express');
const dotenv = require('dotenv'); 
const cors = require('cors'); 
const conectarBD = require('./src/configuracion/baseDatos'); 
const rutasEvento = require('./src/routes/rutasEvento'); 
const rutasAutenticacion = require('./src/routes/rutasAutenticacion'); 

dotenv.config(); 

const app = express();


conectarBD(); 


app.use(express.json());


app.use(cors());


app.use('/api/autenticacion', rutasAutenticacion); 
app.use('/api/eventos', rutasEvento); 


app.get('/', (req, res) => {
  res.send('Servidor en ejecución');
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
