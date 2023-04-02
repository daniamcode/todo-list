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
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onUpdateTaskStatus(task.id)}
            />
            <label className={task.completed ? "completed" : ""}>{task.description}</label>
            <button onClick={() => onUpdateTask(task.id)}>Edit</button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
};

export default TaskList