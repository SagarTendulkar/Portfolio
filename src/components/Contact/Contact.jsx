import React from "react";
import { getImageUrl } from "../../utilis";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out !</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="EmailIcon" />
          <a href="mailto:tendulkarsagar3@gmail.com">
            tendulkarsagar3@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedIcon" />
          <a href="https://www.linkedin.com/in/sagar-tendulkar-6a07b0169/">
            linkedIn/SagarTendulkar
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
          <a href="https://github.com/SagarTendulkar">
            github.com/SagarTendulkar
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
