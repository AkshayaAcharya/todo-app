import { useRef } from "react";

function AddTodo({ todos, onAddTodo }) {
  const taskRef = useRef();

  function addTodo() {
    if (!taskRef.current.value) return;
    const newTodo = {
      id: new Date().getMilliseconds(),
      task: taskRef.current.value,
      status: false,
    };
    onAddTodo(newTodo);
    taskRef.current.value = "";
  }
  return (
    <div className="input-container">
      <input className="input" placeholder="Add todo..." ref={taskRef} />
      <button onClick={addTodo} className="btn">
        <span>+</span>
      </button>
    </div>
  );
}

export default AddTodo;
