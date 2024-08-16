import { Trash } from "phosphor-react";
import styles from "./NewTask.module.css";

interface Task {
  id: number;
  description: string;
}

interface NewTaskProps {
  tasks: Task[];
}

export function NewTask({ tasks }: NewTaskProps) {
  return (
    <div className={styles.taskListContainer}>
      {tasks.map((task: Task) => {
        return (
          <div className={styles.newTask} key={task.id}>
            <div className={styles.description}>
              <input type="radio" className={styles.radioInput} />
              <span className={styles.taskText}>{task.description}</span>
            </div>
            <button className={styles.deleteButton}>
              <Trash size={20} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
