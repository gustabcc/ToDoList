import { Form } from "../Form";
import { Header } from "../Header";
import styles from "./main.module.css";

export function Main() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <Form />
      </main>
    </>
  );
}
