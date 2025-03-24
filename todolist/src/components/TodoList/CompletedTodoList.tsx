import { Todo } from "../../models/Todo"
import styled from "styled-components"
import { ListItem } from "./Todolist"
import { ButtonContainer } from "./Todolist"

interface props {
    completedTodoList: Array<Todo>
    backTodo: (id: number) => void
}

const CompletedTodoList: React.FC<props> = ({completedTodoList, backTodo}) => {
    return (
        <CompletedTodoListContainer>
        <h1>Completed</h1>
        <ul>
            {completedTodoList.map((todo)=>(
        <ListItem key={todo.id}>
            <TodoText>{todo.todo}</TodoText>
            <ButtonContainer>
            <button onClick={() => backTodo(todo.id)}>Back Todo</button>
            </ButtonContainer>
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
    border: 2px solid black;
    border-radius: 1rem;
    background: white;
    margin-right:0rem;
    margin-bottom: 10rem;


    h1 {
        margin-left:auto;
        margin-right:auto;
    }

`

const TodoText = styled.span`
  max-width: 100%;
  overflow-wrap: break-word; 
`;


