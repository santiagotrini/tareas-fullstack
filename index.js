// index.js
// imports
const express = require('express');
const mongoose = require('mongoose');
// variables de configuracion
const port = process.env.PORT || 4000;
const db = process.env.DB || 'mongodb://localhost/tareas';
// conectarse a la base de datos
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DB Conectada'))
  .catch(err => console.log(err));
// objeto app
const app = express();
// middlewares
app.use(express.json());
// routers
app.use('/', require('./api/tarea'));
// listen
app.listen(port, () => {
  console.log('Server escuchando');
});
