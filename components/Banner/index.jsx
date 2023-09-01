import React from "react";

import styles from "styles/Banner.module.css";

export const Banner = ({ heading, content }) => {
  return (
    <div className={styles.banner_canvas}>
      <div className="container">
        <div className={styles.head}>
          <h1>{heading}</h1>
        </div>
        <div className={`${styles.body} row justify-content-center`}>
          <p className="col-xl-5 col-lg-7 col-md-9 col-sm-11 text-center">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
