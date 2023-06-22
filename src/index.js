//Inicializar express 
const express = require("express");
const mongoose = require ('mongoose')
require('dotenv').config();
const app = express();
//Crear app que ejecuta express
//Crear la contante del puerto
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const userRoutes = require('./routes/user');
const prodRoutes = require('./routes/prod');
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', prodRoutes);

//Conectar a la base de datos
mongoose.connect(MONGODB_URI).then(()=> 
    console.log('Conectado a la base de datos'))
    .catch((error) => {
        console.log(error)
    } )

//ruta home =>respuesta

app.get('/',(req,res)=>{
    res.send("Hola desde mi Appi")
})


//Iniciar server
app.listen(port, ()=>{
    console.log("servidor escuchando en el puerto $(port)")
}
)