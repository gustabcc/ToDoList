import { Trash } from "phosphor-react";
import styles from "./NewTask.module.css";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface NewTaskProps {
  tasks: Task[];
  onDeleteTask: (id: Task["id"]) => void;
  onToggleTaskCompletion: (id: Task["id"]) => void;
}

export function NewTask({
  tasks,
  onDeleteTask,
  onToggleTaskCompletion,
}: NewTaskProps) {
  return (
    <div className={styles.taskListContainer}>
      {tasks.map((task: Task) => {
        return (
          <div className={styles.newTask} key={task.id}>
            <div className={styles.description}>
              <input
                type="checkbox"
                checked={task.completed}
                className={styles.radioInput}
                onChange={() => onToggleTaskCompletion(task.id)}
              />
              <span
                className={`${styles.taskText} ${task.completed ? styles.completedTask : ""}`}
              >
                {task.description}
              </span>
            </div>
            <button
              onClick={() => onDeleteTask(task.id)}
              className={styles.deleteButton}
            >
              <Trash size={20} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
