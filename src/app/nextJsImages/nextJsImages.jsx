import styles from "./nextJsImages.module.css";
import Image from "next/image";

const NextJsImages = () => {
  return (
    <div className={styles.container}>
      <h3>Next.js Images</h3>
      <div className={styles.imgsContainer}>
        <header className={styles.gridHeader}>
          <h2>Aviones</h2>
          <div>
            <Image src="/boeing/image.png" style={{ objectFit: "cover" }} fill />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est
            blanditiis similique quos, quas numquam ipsam eius error itaque.
          </p>
        </header>
        <div className={styles.img}>
          <Image
            src="/boeing/2.jpg"
            alt="Imagen de Boeing"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.img}>
          <Image
            src="/boeing/3.jpg"
            alt="Imagen de Boeing"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.img}>
          <Image
            src="/boeing/5.png"
            alt="Imagen de Boeing"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.img}>
          <Image
            src="/boeing/6.png"
            alt="Imagen de Boeing"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NextJsImages;
