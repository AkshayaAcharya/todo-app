import { useEffect, useState } from "react";

const deletimg = require("../assets/delete.png");
function Todo({ todos, todo, onDeleteTodo, onUpdateTodo }) {
  const [checked, setChecked] = useState(false);

  function updateTodos() {
    setChecked(!checked);
  }
  useEffect(
    function () {
      console.log(todo.status);
      // setChecked(todo)
      todo.status = checked;
      let modifyTodo = todos.find((t) => t.id === todo.id);
      modifyTodo = { ...modifyTodo, status: checked };
      console.log(modifyTodo);
      onUpdateTodo(modifyTodo);
      // onUpdateTodo(todo.id, checked);
    },
    [checked, onUpdateTodo]
  );

  return (
    <div className={checked ? "todo done" : "todo"}>
      <input
        type="checkbox"
        onChange={updateTodos}
        checked={todo.status ? true : false}
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

export default Todo;
