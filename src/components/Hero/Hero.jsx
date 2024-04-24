import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utilis";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sagar</h1>
        <p className={styles.description}>
          I'm a FrontEnd Developer using React JS. Reach out if you'd like to
          learn more!
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:tendulkarsagar3@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/hero.png")}
        alt=""
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
