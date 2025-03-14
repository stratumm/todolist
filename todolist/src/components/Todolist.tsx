import { Todo } from "../models/Todo"

interface props {
    todoList: Array<Todo>
    handleDelete: (id: number) => void
}

const TodoList: React.FC<props> = ({todoList, handleDelete}) => {
    return (
        <ul>
            {todoList.map((todo)=>(
        <li key={todo.id}>
            {todo.todo}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>    
            ))}
        </ul>
    )
}

export default TodoList