import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css";
import { Tasks } from "../Tasks";
import { useState } from "react";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  function handleCreateTask(event: React.FormEvent<HTMLButtonElement>) {
    event?.preventDefault();

    const taskObject = {
      id: Math.random(),
      description: newTask,
      completed: false,
    };

    setTasks([...tasks, taskObject]);
    setNewTask("");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function onDeleteTask(id: Task["id"]) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleToggleTaskCompletion(id: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
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

      <Tasks
        onDeleteTask={onDeleteTask}
        onToggleTaskCompletion={handleToggleTaskCompletion}
        tasks={tasks}
      />
    </>
  );
}
