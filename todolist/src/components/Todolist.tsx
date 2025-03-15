import { Todo } from "../models/Todo"
import styled from "styled-components"
import {useState} from "react"

interface props {
    todoList: Array<Todo>
    handleDelete: (id: number) => void
    handleComplete: (id: number) => void
    handleEdit: (id: number, newText: string) => void
}

const TodoList: React.FC<props> = ({todoList, handleDelete, handleComplete, handleEdit}) => {

    const [editingId, setEditingId] = useState<number | null>(null); 
    const [editedText, setEditedText] = useState(""); 
  
    const startEditing = (id: number, text: string) => {
      setEditingId(id);
      setEditedText(text);
    };
  
    const saveEdit = (id: number) => {
      handleEdit(id, editedText); 
      setEditingId(null); 
    };

    return (
        <TodoListContainer>
          <h1>To do List</h1>
          <ul>
            {todoList.map((todo) => (
              <ListItem key={todo.id}>
                {editingId === todo.id ? (
                  <>
                    <input value={editedText} onChange={(e) => setEditedText(e.target.value)}/>
                    <button onClick={() => saveEdit(todo.id)}>Save</button>
                  </>
                ) : (
                  <>
                    <TodoText>{todo.todo}</TodoText>
                    <ButtonContainer>
                      <EditButton onClick={() => startEditing(todo.id, todo.todo)}>Edit</EditButton>
                      <DeleteButton onClick={() => handleDelete(todo.id)}>Delete</DeleteButton>
                      <CompleteButton onClick={() => handleComplete(todo.id)}>Mark Complete</CompleteButton>
                    </ButtonContainer>
                  </>
                )}
              </ListItem>
            ))}
          </ul>
        </TodoListContainer>
      );
    };

export default TodoList

const TodoListContainer = styled.div`
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

const EditButton = styled.button `
    display: flex;
`

const DeleteButton = styled.button `
    display: flex;
`

const CompleteButton = styled.button `
    display: flex;
`

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  button {
  font-family:inherit;
  }

  input {
  font-family:inherit;
  }
`;

const ButtonContainer = styled.div `
    display: flex;
    gap: 0.5rem;
    width: 10rem;
    height: 2.5rem;

    button {
    background: none;
    }
`

const TodoText = styled.span`
  max-width: calc(100% - 12rem);
  word-wrap: break-word;
`;

