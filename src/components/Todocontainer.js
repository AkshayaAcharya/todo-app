import { useEffect } from "react";
import Td from "./Td";

function Todocontainer({ todos, onDeleteTodo, onUpdateTodo }) {
  useEffect(
    function () {
      console.log(todos);
    },
    [todos]
  );
  return (
    <>
      {todos.length > 0 && (
        <div className="todo-container">
          {todos.map((todo) => (
            <Td
              todos={todos}
              todo={todo}
              key={todo.id}
              onDeleteTodo={onDeleteTodo}
              onUpdateTodo={onUpdateTodo}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Todocontainer;
