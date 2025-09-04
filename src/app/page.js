import styles from "./page.module.css";
import Navbar from "./navbar/navbar";
import NextJsImages from "./nextJsImages/nextJsImages";
import Counter from "./counter/counter";

export default function Home() {
  return (
    <div className={styles.wasd}>
      <Navbar/>
      <NextJsImages />
      <Counter />
    </div>
  );
}
