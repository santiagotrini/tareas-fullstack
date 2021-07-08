// client/src/App.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import NuevaTarea from './NuevaTarea';
import ListaTareas from './ListaTareas';

const App = () => {
  // hooks
  const [tareas, setTareas] = useState([]);
  // hook de efecto
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
    <>
      <h1>Lista de tareas</h1>
      <NuevaTarea
        tareas={tareas}
        setTareas={setTareas}
      />
      <ListaTareas
        tareas={tareas}
        setTareas={setTareas}  
      />
    </>
  );
}

export default App;
