// client/src/NuevaTarea.js
import { useState } from 'react';
import axios from 'axios';

const NuevaTarea = props => {
  // props
  const { tareas, setTareas } = props;
  // hook de estado
  const [text, setText] = useState('');
  // handler
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submiteando');
    console.log(text);
    let tarea = {
      text: text
    };
    axios.post('/api/tareas', tarea)
      .then(res => {
        console.log(res.data);
        setText('');
        setTareas([...tareas, res.data])
      });
  };
  // render  
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
