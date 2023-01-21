
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require ('cors');




// Crear servidor express
const app = express();

//Base de datos

dbConnection();

// CORS
app.use(cors())


//Directorio publico

//Middleware 9funcion que se ejecuta cuando alguien hace una peticion a mi servidor
app.use(express.static('public'))

//lectura y parseo del body

app.use(express.json());



// Rutas

app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// TODO : CRID: Eventos


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
