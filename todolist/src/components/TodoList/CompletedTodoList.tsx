import { Todo } from "../../models/Todo"
import styled from "styled-components"

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
            <Back onClick={() => backTodo(todo.id)}>Back Todo</Back>
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

const ListItem = styled.li`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;
  
`;


const TodoText = styled.span`
  max-width: 100%;
  overflow-wrap: break-word; 
`;

const Back = styled.button `
background: none;
margin-right: 2rem;
`
