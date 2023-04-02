const Form = ({
    handleSubmit,
    handleTaskChange,
    mode,
    text
}: { 
    text: string,
    mode: string,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handleTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return(
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tasks">{mode === 'add' ? 'Add a Task' : 'Update a Task'}</label>
          <input
            type="text"
            id="tasks"
            name="tasks"
            value={text}
            onChange={handleTaskChange}
          />
          <button type="submit">{mode === 'add' ? 'Add Task' : 'Update Task'}</button>
        </div>
      </form>
    )

}

export default Form