
interface props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<props> = ({handleAdd, todo, setTodo}) => {
    return (
        <form onSubmit={handleAdd}>
            <input placeholder ="Enter a task" onChange={(e) => setTodo(e.target.value)} value={todo}></input>
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default InputField;
