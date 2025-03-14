import { useState } from "react"
import InputField from "./components/InputField"
import TodoList from "./components/Todolist"
import { Todo } from "./models/Todo"
import CompletedTodoList from "./components/CompletedTodoList"
import styled from "styled-components"

export default function App() {


const [todo, setTodo] = useState<string>("")
const [todoList, setTodoList] = useState<Array<Todo>>([])
const [completedTodoList, setCompletedTodoList] = useState<Array<Todo>>([])


const handleAdd = (e: React.FormEvent) => {
e.preventDefault()
  if (todo) {
    setTodoList( [...todoList, {id: Date.now(), todo, completed: false}])
    console.log(todo)
    setTodo("")
  }
}

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


  return  (
    <Background>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo}/>
      <TodoList todoList={todoList} handleDelete={handleDelete} handleComplete={handleComplete}/>
      <CompletedTodoList completedTodoList={completedTodoList} />
    </Background>
  )
}


const Background = styled.div`
  background: royalblue;
`
