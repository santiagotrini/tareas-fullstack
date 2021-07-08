// client/src/Tarea.js
const Tarea = props => {
  const { tarea } = props;
  return (
    <li>
      {tarea.text}
      <button>Eliminar</button>
    </li>
  );
};

export default Tarea;
