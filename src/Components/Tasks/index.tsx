import { ClipboardText } from "phosphor-react";
import styles from "./Tasks.module.css";
import { NewTask } from "./NewTask";

interface Task {
  id: number;
  description: string;
}

interface TasksProps {
  tasks: Task[];
}

export function Tasks({ tasks }: TasksProps) {
  const tasksLength = tasks.length;

  return (
    <div className={styles.tasks}>
      <header>
        <p>
          Tarefas criadas <span>{tasksLength}</span>
        </p>
        <p>
          Tarefas concluídas <span>0</span>
        </p>
      </header>

      <div className={styles.createdTasks}>
        {tasksLength !== 0 ? (
          <NewTask tasks={tasks} />
        ) : (
          <div className={styles.emptyTasks}>
            <ClipboardText className={styles.iconEmpty} size={32} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  );
}
