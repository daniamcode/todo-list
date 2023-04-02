import styles from "../styles/input.module.scss";

const TaskInput = ({
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
        <form className={styles.formGroup} onSubmit={handleSubmit}>
          <label htmlFor="tasks">{mode === 'add' ? 'Add a Task:' : 'Update a Task:'}</label>
          <div className={styles.container}>
            <input
              type="text"
              id="tasks"
              name="tasks"
              value={text}
              onChange={handleTaskChange}
            />
            <button className={styles.button} type="submit">{mode === 'add' ? 'Add Task' : 'Update Task'}</button>
          </div>
      </form>
    )

}

export default TaskInput