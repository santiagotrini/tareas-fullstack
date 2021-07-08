// client/src/App.js
import NuevaTarea from './NuevaTarea';
import ListaTareas from './ListaTareas';

const App = () => {
  return (
    <>
      <h1>Lista de tareas</h1>
      <NuevaTarea />
      <ListaTareas />
    </>
  );
}

export default App;
