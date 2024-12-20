import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      {/* Use TodoList component */}
      <TodoList />
    </div>
  );
}

export default App;
