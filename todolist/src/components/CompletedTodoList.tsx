import { Todo } from "../models/Todo"
import styled from "styled-components"

interface props {
    completedTodoList: Array<Todo>
}

const CompletedTodoList: React.FC<props> = ({completedTodoList}) => {
    return (
        <CompletedTodoListContainer>
        <h1>Completed</h1>
        <ul>
            {completedTodoList.map((todo)=>(
        <ListItem key={todo.id}>
            <TodoText>{todo.todo}</TodoText>

        </ListItem>    
            ))}
        </ul>
        </CompletedTodoListContainer>
    )
}

export default CompletedTodoList

const CompletedTodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 4rem;
    padding-top: 0;
    border-right: 2px solid black;
    background: lightcoral;

    h1 {
        margin-left:auto;
        margin-right:auto;
    }

`

const ListItem = styled.li`
  display: flex;
  margin-bottom: 2rem;
`;


const TodoText = styled.span`
  max-width: 100%;
  overflow-wrap: break-word; 
`;

