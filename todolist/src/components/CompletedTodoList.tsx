import { Todo } from "../models/Todo"
import styled from "styled-components"

interface props {
    completedTodoList: Array<Todo>
}

const CompletedTodoList: React.FC<props> = ({completedTodoList}) => {
    return (
        <CompletedTodoListContainer>
            <h1>Completed</h1>
            <ul >
                {completedTodoList.map((todo) => (
            <li key={todo.id}>
                {todo.todo}
            </li>    
                ))}
            </ul>
        </CompletedTodoListContainer>
    )
}

export default CompletedTodoList

const CompletedTodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-left: auto;
    margin-right:auto;
    padding: 4rem;
    background: lightcoral;
`

