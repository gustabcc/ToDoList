import styles from "./header.module.css";
import rocket from "../../Assets/logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <span>
          <img className={styles.iconImage} src={rocket} alt="" />
        </span>
        <span className={styles.gradientText}>todo</span>
      </h1>
    </header>
  );
}
