import { Trash } from "phosphor-react";
import styles from "./NewTask.module.css";
interface Task {
  id: number;
  title: string;
}

const tasks = [
  {
    id: 1,
    title: "Estudar React",
  },
  {
    id: 2,
    title: "Estudar TypeScript",
  },
  {
    id: 3,
    title: "Estudar Next.js",
  },
  {
    id: 4,
    title: "Estudar React",
  },
  {
    id: 5,
    title: "Estudar React",
  },
  {
    id: 6,
    title: "Estudar React",
  },
];

export function NewTask() {
  return (
    <div className={styles.taskListContainer}>
      {tasks.map((task: Task) => {
        return (
          <div className={styles.newTask} key={task.id}>
            <div className={styles.description}>
              <input type="radio" className={styles.radioInput} />
              <span className={styles.taskText}>{task.title}</span>
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
