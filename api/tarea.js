// api/tarea.js
// endpoints de la API
// import
const express = require('express');
const Tarea = require('../models/Tarea');
// objeto router
const router = express.Router();
// rutas
// todas las tareas
// GET /api/tareas
router.get('/api/tareas', (req, res) => {
  Tarea.find().exec((err, tareas) => {
    res.json(tareas);
  });
});
// borrar una tarea
// DELETE /api/tareas/id
router.delete('/api/tareas/:id', (req, res) => {
  Tarea.findByIdAndRemove(req.params.id, () => {
    res.json({ msg: 'tarea borrada' });
  });
});
// crear una tarea
// POST /api/tareas
router.post('/api/tareas', (req, res) => {
  const { text } = req.body;
  const tarea = new Tarea({
    text,
  });
  tarea.save((err, tarea) => {
    console.log('Tarea creada:');
    console.log(tarea);
    res.json(tarea);
  });
});
// export
module.exports = router;
