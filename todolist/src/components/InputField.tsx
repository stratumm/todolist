import styled from "styled-components"

interface props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<props> = ({handleAdd, todo, setTodo}) => {
    return (
        <Form onSubmit={handleAdd}>
            <input placeholder ="Enter a task" onChange={(e) => setTodo(e.target.value)} value={todo}></input>
            <button type="submit">
                Submit
            </button>
        </Form>
  )
}

export default InputField;

const Form = styled.form`
  display: flex;
  justify-content: center; 
  input {
    padding: 1.5rem;
    font-family: inherit;
  }

  button {
  font-family: inherit;
  }
`;