// create the 'todoList' array
const todoList = [
    {
      id: 1,
      title: "React"
    },
    {
      id: 2,
      title: "Learning"
    },
    {
      id: 3,
      title: "Journey"
    },
  ];
function TodoList() {
   return (
    <ul>
        {todoList.map((item) =>(
            <li key={item.id}> {item.title} </li>
        ))}
    </ul>
   );
}

export default TodoList;