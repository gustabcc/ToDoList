import { ClipboardText } from "phosphor-react";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <header>
        <p>
          Tarefas criadas <span>0</span>
        </p>
        <p>
          Tarefas concluídas <span>0</span>
        </p>
      </header>

      <div className={styles.createdTasks}>
        <div className={styles.emptyTasks}>
          <ClipboardText className={styles.iconEmpty} size={32} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
}
