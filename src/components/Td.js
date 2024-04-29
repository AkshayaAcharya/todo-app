import { useEffect, useState } from "react";

const deletimg = require("../assets/delete.png");
function Td({ todo, onDeleteTodo, onUpdateTodo }) {
  const [checked, setChecked] = useState(false);
  function handleUpdate(e) {
    // e.preventDefault();
    setChecked((checked) => !checked);
    onUpdateTodo(todo, checked);
  }
  useEffect(
    function () {
      setChecked(todo.status);
      console.log(checked);
    },
    [todo, checked, onUpdateTodo]
  );

  return (
    <div
      className={todo.status ? "todo done" : "todo"}
      onClick={(e) => e.preventDefault()}
    >
      <input
        type="checkbox"
        checked={todo.status ? true : false}
        onChange={handleUpdate}
      />
      <span className="task">{todo.task}</span>
      <img
        className="del"
        src={deletimg}
        alt="delete"
        onClick={() => onDeleteTodo(todo.id)}
      />
    </div>
  );
}

export default Td;
