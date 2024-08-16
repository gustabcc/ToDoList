import { ClipboardText } from "phosphor-react";
import styles from "./Tasks.module.css";
import { NewTask } from "./NewTask";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface TasksProps {
  tasks: Task[];
  onDeleteTask: (id: Task["id"]) => void;
  onToggleTaskCompletion: (id: Task["id"]) => void;
}

export function Tasks({
  tasks,
  onDeleteTask,
  onToggleTaskCompletion,
}: TasksProps) {
  const tasksLength = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className={styles.tasks}>
      <header>
        <p>
          Tarefas criadas <span>{tasksLength}</span>
        </p>
        <p>
          Tarefas concluídas <span>{completedTasks}</span>
        </p>
      </header>

      <div className={styles.createdTasks}>
        {tasksLength !== 0 ? (
          <NewTask
            onToggleTaskCompletion={onToggleTaskCompletion}
            onDeleteTask={onDeleteTask}
            tasks={tasks}
          />
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
