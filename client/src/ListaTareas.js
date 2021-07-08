// client/src/ListaTareas.js
import { useEffect } from 'react';
import axios from 'axios';

const ListaTareas = props => {
  // hooks
  useEffect(() => {
    axios.get('/api/tareas')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  });
  // render
  return (
    <div></div>
  );
};

export default ListaTareas;
