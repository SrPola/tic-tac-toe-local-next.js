import styles from "./page.module.css";
import Game from "./tic-tac-toe.js"
import MiNombre from "./minombre.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <Game />
      <MiNombre />
    </main>
  );
}
