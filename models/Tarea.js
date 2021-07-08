// models/Tarea.js
// imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Schema de Tarea
const TareaSchema = new Schema({
  text: String,
  done: { type: Boolean, default: false }
});
// modelo de Tarea
const Tarea = mongoose.model('Tarea', TareaSchema);
// exportar
module.exports = Tarea;
