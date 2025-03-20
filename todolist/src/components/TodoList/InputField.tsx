import styled from "styled-components"
import { useState} from "react"

interface props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
    setPriority: React.Dispatch<React.SetStateAction<string>> 
}


const InputField: React.FC<props> = ({handleAdd, todo, setTodo, setPriority}) => {

  const [selectedOption, setSelectedOption] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPriority(e.target.value)
  setSelectedOption(e.target.value)
}

    return (
        <Form onSubmit={handleAdd}>
            <input placeholder ="Enter a task" onChange={(e) => setTodo(e.target.value)} value={todo}></input>
            <RadioForm>
              <label>
              <input type="radio" value="asap" onChange= {handleChange} checked={selectedOption === "asap"}/>
              ASAP
             </label>
             <label>
              <input type="radio" value="important" onChange={handleChange} checked={selectedOption === "important"}/>
              Important
             </label>
             <label>
              <input type="radio" value="notimportant" onChange={handleChange}  checked={selectedOption === "notimportant"}/>
              Not Important
             </label>
            </RadioForm>
            <button type="submit">
                Add
            </button>
        </Form>
  )
}

export default InputField;

const Form = styled.form`
  display: flex;
  justify-content: center; 
  margin-top: 4rem;
  input {
    padding: 1.5rem;
    font-family: inherit;
      border-radius: 20px;

  }
  button {
  font-family: inherit;
  }
`;

const RadioForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`