import TodoListItem from "./TodoListItem";
// create the 'todoList' array
const todoList = [
  {
    id: 1,
    title: "React",
  },
  {
    id: 2,
    title: "Learning",
  },
  {
    id: 3,
    title: "Journey",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} title={item.title} id={item.id} />
      ))}
    </ul>
  );
}

export default TodoList;
