import React from "react";

import styles from "styles/Banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.banner_canvas}>
      <div className="container">
        <div className={styles.head}>
          <h1>Hello </h1>
        </div>
        <div className={`${styles.body} row justify-content-center`}>
          <p className="col-xl-6 col-lg-10 text-center">
            Over the past 12+ years, I've worked in various areas of digital
            design, including front-end development, email, marketing, and app
            UI/UX. I'm proud to have worn many hats.
          </p>
        </div>
      </div>
    </div>
  );
};
