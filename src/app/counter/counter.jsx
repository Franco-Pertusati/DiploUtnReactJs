"use client";
import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        <span>El contador está en: {count}</span>
        <div>
          <button onClick={() => setCount(count + 1)}>Incrementar</button>
          <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
