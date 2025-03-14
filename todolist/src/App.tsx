import { useState } from "react"
import InputField from "./components/InputField"
import TodoList from "./components/Todolist"

export default function App() {

interface Todo {
  id: number
  todo: string
  completed: boolean
}

const [todo, setTodo] = useState<string>("")
const [todoList, setTodolist] = useState<Array<Todo>>([])


const handleAdd = (e: React.FormEvent) => {
e.preventDefault()
  if (todo) {
    setTodolist( [...todoList, {id: Date.now(), todo, completed: false}])
    console.log(todo)
    setTodo("")
  }
}

const handleDelete = (id: number) => {
  const deletedTodo = todoList.filter((todo) => todo.id!= id)
  setTodolist(deletedTodo)
}


  return  (
    <>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo}/>
      <TodoList todoList={todoList} handleDelete={handleDelete}/>
    </>
  )
}