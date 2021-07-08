// client/src/NuevaTarea.js
import { useState } from 'react';
import axios from 'axios';

const NuevaTarea = props => {

  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submiteando');
    console.log(text);
    let tarea = {
      text: text
    };
    axios.post('/api/tareas', tarea)
      .then(res => console.log(res.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input type="submit" value="Crear" />
    </form>
  );
};

export default NuevaTarea;
