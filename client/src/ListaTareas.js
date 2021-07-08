// client/src/ListaTareas.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Tarea from './Tarea';
const ListaTareas = props => {
  // hooks
  const [tareas, setTareas] = useState([]);
  useEffect(() => {
    axios.get('/api/tareas')
      .then(res => {
        console.log(res.data);
        setTareas(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  // render
  return (
    <ul>
      {tareas.map(tarea => (
        <Tarea key={tarea._id} tarea={tarea} />
      ))}
    </ul>
  );
};

export default ListaTareas;
