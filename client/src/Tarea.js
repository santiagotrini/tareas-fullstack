// client/src/Tarea.js
import axios from 'axios';

const Tarea = props => {
  // props
  const { tarea, tareas, setTareas } = props;
  // handlers
  const handleClick = e => {
    console.log('no me elimines');
    console.log(tarea._id);
    axios.delete('/api/tareas/' + tarea._id)
      .then(res => {
        const nuevasTareas = tareas.filter(t => t._id !== tarea._id);
        setTareas(nuevasTareas);
      });
  };
  // render
  return (
    <li>
      {tarea.text}
      <button onClick={handleClick}>Eliminar</button>
    </li>
  );
};

export default Tarea;
