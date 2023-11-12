import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graphicdesign.png")} alt="GD Icon" />
            <div className={styles.aboutItemText}>
              <h3>Graphic Designer</h3>
              <p>
                I'm a Graphic Designer with expertise in desigining Visual Branding, Poster/Flyer, Infographics, Illsutrations
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uidesign.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I also have designed multiple websites and mobile apps.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
