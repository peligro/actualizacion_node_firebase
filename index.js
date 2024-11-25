const express = require("express");
const app = express();
const bodyParser = require('body-parser');
//implementación de morgan
const morgan = require("morgan");
app.use(morgan('dev'));
//para poder usar variables globales
require('dotenv').config();

//middlewares para body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//se registran las rutas
app.use("/", require('./rutas/index'));

app.listen(process.env.PORT, ()=>{

    console.log("Desplegando nuestro proyecto")
});