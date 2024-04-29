import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todocontainer from "./components/Todocontainer";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
function App() {
  // const [todos, setTodos] = useLocalStorage([], "todos");
  const [todos, setTodos] = useState(function () {
    const storedValue = localStorage.getItem("todos");
    return storedValue ? JSON.parse(storedValue) : [];
  });
  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function updateTodo(todo, checked) {
    // const newTodods = todos.filter((t) => t.id !== todo.id);
    // setTodos((todos) => [...newTodods, todo]);
    console.log(todo.status);
    setTodos(
      todos.map((td) => (td.id === todo.id ? { ...todo, status: checked } : td))
    );
  }
  useEffect(
    function () {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );
  return (
    <div className="container">
      <Header />
      <AddTodo todos={todos} onAddTodo={handleAddTodo} />
      <Todocontainer
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
