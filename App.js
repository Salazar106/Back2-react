const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const controllers=require('./controllers')
const register = require("./register");
const login = require("./login");
const getUserById = require("./getuserById");
const envios = require("./envios");
const obtenerEnvios = require("./obtenerEnvios");
const obtenerEnvById=require('./getEnvById');
const updateEnvio=require('./update');
const deleteEnvio=require('./deleteEnv')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/user/:userId', getUserById);
app.post('/register', register);
app.post('/login', login);
app.post('/envios', envios);
app.get('/obtenerEnvios', obtenerEnvios)
app.get('/obtenerEnvById/:id', obtenerEnvById)
app.put('/updateEnvio/:id', updateEnvio)
app.delete('/deleteEnvio/:_id', deleteEnvio)


const PORT = 4000;

app.listen(process.env.PORT || PORT, () => {
  console.log("******************************************************");
  console.log("   👉👉 SERVIDOR FUNCIONANDO EN EL PUERTO " + PORT + "👈👈");
  console.log("******************************************************");
  db();
});

module.exports = app;
