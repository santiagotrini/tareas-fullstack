// client/src/ListaTareas.js
import Tarea from './Tarea';
const ListaTareas = props => {
  // props
  const { tareas, setTareas } = props;
  // render
  return (
    <ul>
      {tareas.map(tarea => (
        <Tarea
          tareas={tareas}
          setTareas={setTareas}
          key={tarea._id}
          tarea={tarea}
        />
      ))}
    </ul>
  );
};

export default ListaTareas;
