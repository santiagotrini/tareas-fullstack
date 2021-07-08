// client/src/ListaTareas.js
import Tarea from './Tarea';
const ListaTareas = props => {
  // props
  const { tareas } = props;
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
