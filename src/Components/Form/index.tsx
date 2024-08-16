import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css";
import { Tasks } from "../Tasks";
import { useState } from "react";

interface Task {
  id: number;
  description: string;
}

export function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  function handleCreateTask(event: React.FormEvent<HTMLButtonElement>) {
    event?.preventDefault();

    const taskObject = {
      id: Math.random(),
      description: newTask,
    };

    setTasks([...tasks, taskObject]);
    setNewTask("");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          onChange={handleInputChange}
          value={newTask}
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={handleCreateTask}>
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <Tasks tasks={tasks} />
    </>
  );
}
