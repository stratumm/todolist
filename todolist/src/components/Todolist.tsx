import { Todo } from "../models/Todo"
import styled from "styled-components"

interface props {
    todoList: Array<Todo>
    handleDelete: (id: number) => void
    handleComplete: (id: number) => void

}

const TodoList: React.FC<props> = ({todoList, handleDelete, handleComplete}) => {
    return (
        <TodoListContainer>
        <h1>To do List</h1>
        <ul>
            {todoList.map((todo)=>(
        <li key={todo.id}>
            {todo.todo}
            <DeleteButton onClick={() => handleDelete(todo.id)}>Delete</DeleteButton>
            <button onClick={() => handleComplete(todo.id)}>Mark Complete</button>
        </li>    
            ))}
        </ul>
        </TodoListContainer>
    )
}

export default TodoList

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin-left: auto;
    margin-right:auto;
    padding: 4rem;
    background: lightcoral;
    h1 {
        margin-left:auto;
        margin-right:auto;
    }
`

const DeleteButton = styled.button `
    background: none;
    border: none;
`