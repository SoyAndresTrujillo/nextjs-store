import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    console.log("hello world página de inicio")
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to my website!</h1>
    </main>
  );
}
