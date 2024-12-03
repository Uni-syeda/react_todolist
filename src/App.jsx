import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// create the 'todoList' array
const todoList = [
  {
    id:1,
    title:"React",
  },
  {
    id:2,
    title:"Learning",
  },
  {
    id:3,
    title: "Journey"
  }
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Todo List</h1>
     {/* render the list using .map() */}
      <ul>
        {todoList.map((item) =>( 
          <li key={item.id}> {item.title}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
