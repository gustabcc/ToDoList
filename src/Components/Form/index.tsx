import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css";
import { Tasks } from "../Tasks";

export function Form() {
  return (
    <>
      <form className={styles.form}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <Tasks />
    </>
  );
}
