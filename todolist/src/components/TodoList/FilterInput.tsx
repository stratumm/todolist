import { Todo } from "../../models/Todo"
import { useEffect, useState } from "react"

interface props {
    todoList: Array<Todo>
}

const FilterInput: React.FC<props> = ({todoList}) => {
const [input, setInput] = useState<string>("")
const [modTodoList, setModTodoList] = useState<Array<Todo>>(todoList)
const handleFilter = (input: string) => {
  const search = todoList.filter((todo) => todo.todo.includes(input))
  setModTodoList(search);
};


return (
    <>
        <input type="text" placeholder="Search todo" onChange={(e) => setInput(e.target.value)}></input>
        <ul>
           {modTodoList.map((todo) => <li>
            {todo.todo}
           </li>)}
        </ul>
        <button type="button" onClick={() => handleFilter(input)}>Filter</button>
    </>
)
}

export default FilterInput