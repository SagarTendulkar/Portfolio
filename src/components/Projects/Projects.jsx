import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utilis";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.project}>
              <img
                className={styles.image}
                src={getImageUrl(project.imageSrc)}
                alt={project.title}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.skills}>
                {project.skills.map((skill, id) => {
                  return (
                    <li className={styles.skill} key={id}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div className={styles.links}>
                <a className={styles.link} href={project.demo} target="blank">
                  Demo
                </a>
                <a className={styles.link} href={project.source}>
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
