const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const controllers=require('./controllers/index')


const app = express();

app.use(cors());
app.use(express.json());

app.get('/user/:userId', controllers.getUserById);
app.post('/register', controllers.register);
app.post('/login', controllers.login);
app.post('/envios', controllers.envios);
app.get('/obtenerEnvios', controllers.obtenerEnvios)
app.get('/obtenerEnvById/:id', controllers.obtenerEnvById)
app.put('/updateEnvio/:id', controllers.updateEnvio)
app.delete('/deleteEnvio/:_id', controllers.deleteEnvio)


const PORT = 4000;

app.listen(process.env.PORT || PORT, () => {
  console.log("******************************************************");
  console.log("   👉👉 SERVIDOR FUNCIONANDO EN EL PUERTO " + PORT + "👈👈");
  console.log("******************************************************");
  db();
});

module.exports = app;
