import { Task } from "@/interfaces/common";
import styles from "../styles/list.module.scss";

const TaskList = ({ 
        tasks, 
        onUpdateTaskStatus, 
        onDeleteTask, 
        onUpdateTask 
    }: { 
        tasks: Task[], 
        onUpdateTaskStatus: (taskId: number) => void, 
        onDeleteTask: (taskId: number) => void , 
        onUpdateTask: (taskId: number) => void }) => {
    return (
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li className={styles.listItem} key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onUpdateTaskStatus(task.id)}
              className={styles.checkbox}
            />
            <div className={styles.description}>{task.description}</div>
            <div className={styles.actions}>
              <button className={styles.button} onClick={() => onUpdateTask(task.id)}>Edit</button>
              <button className={styles.button} onClick={() => onDeleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );
};

export default TaskList