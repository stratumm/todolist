import { useState } from "react"
import InputField from "./components/InputField"
import TodoList from "./components/Todolist"
import { Todo } from "./models/Todo"
import CompletedTodoList from "./components/CompletedTodoList"
import styled from "styled-components"
import ModalComponent from "./components/modals/Modal"


export default function App() {

const [todo, setTodo] = useState<string>("")
const [todoList, setTodoList] = useState<Array<Todo>>([])
const [completedTodoList, setCompletedTodoList] = useState<Array<Todo>>([])
const [priority, setPriority] = useState<string>("")

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();
  if (todo) {
    if (priority === "asap") {
      setTodoList([{ id: Date.now(), todo, completed: false, priority: "asap" }, ...todoList]);
    } else {
      setTodoList([...todoList, { id: Date.now(), todo, completed: false, priority: "" }]);
    }
    setTodo(""); 
  }
};

const handleDelete = (id: number) => {
  const deletedTodo = todoList.filter((todo) => todo.id!= id)
  setTodoList(deletedTodo)
}

const handleComplete = (id: number) => {
  const completedTodo = todoList.find((todo) => todo.id === id)
  if (completedTodo) {
  setCompletedTodoList([...completedTodoList, { ...completedTodo, completed: true }]);
  setTodoList(todoList.filter((todo) => todo.id != id))
}
}

const handleEdit = (id: number, newText: string) => {
  const editedText = todoList.map((todo) => todo.id === id ? {...todo, todo: newText} : todo)
  setTodoList(editedText)
}

const backTodo = (id: number) => {
  const completedTodo = completedTodoList.find((comp) => comp.id === id )
  if (completedTodo) {
    setCompletedTodoList(completedTodoList.filter((comp) => comp.id != id))
    setTodoList([...todoList, { id: completedTodo.id, todo: completedTodo.todo, completed: false, priority: ""}])
  } 
}

const clear = () => {
  setTodoList([])
}

  return  (
    <>
      <ModalComponent/>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} setPriority={setPriority}/>
      <ParentContainer>
      <TodoList todoList={todoList} handleDelete={handleDelete} handleComplete={handleComplete} handleEdit={handleEdit} clear={clear}/>
      <CompletedTodoList completedTodoList={completedTodoList} backTodo={backTodo}/>
      </ParentContainer>
    </>
  )
}

const ParentContainer = styled.div `
  display:flex;
  justify-content: center; 
  min-height: 80vh;
  flex-grow: 1;
  margin-top: 2rem;
`
