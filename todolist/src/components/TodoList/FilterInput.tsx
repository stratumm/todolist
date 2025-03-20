import { Todo } from "../../models/Todo"
import { useState } from "react"
import styled from "styled-components"

interface props {
    todoList: Array<Todo>
}

const FilterInput: React.FC<props> = ({todoList}) => {
const [input, setInput] = useState<string>("")
const [modTodoList, setModTodoList] = useState<Array<Todo>>(todoList)
const handleFilter = (input: string) => {
  const search = todoList.filter((todo) => todo.todo.includes(input))
  setModTodoList(search);
  setInput("")
};

return (
    <>
        <input type="text" placeholder="Search todo" value={input} onChange={(e) => setInput(e.target.value)} style={{marginBottom:"2rem"}}></input>
        <ul>
           {modTodoList.map((todo) => 
           <li>
            {todo.todo}
           </li>)}
        </ul>
        <StyledButtons>
        <button type="button" onClick={() => handleFilter(input)} style={{fontFamily:"inherit"}}>Filter</button>
        <button onClick={() => setModTodoList(todoList)} style={{fontFamily:"inherit"}}>Reset</button>
        </StyledButtons>
    </>
)
}

export default FilterInput

const StyledButtons = styled.div`
    display:flex;
    justify-content: center;
`