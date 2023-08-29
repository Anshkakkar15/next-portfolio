import React, { useState } from "react";

export const Header = ({ styles }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={styles.nav_wrapper}>
        <p className={styles.logo}>Logo</p>
        <div class={`${styles.primary_nav} ${open ? styles.active : ""}`}>
          <ul class={`${styles.list} ${open ? styles.nav_opac : ""}`}>
            <li>
              <a class={`${styles.nav_link}`} href="#">
                Home
              </a>
            </li>
            <li>
              <a class={`${styles.nav_link}`} href="#">
                About
              </a>
            </li>
            <li>
              <a class={`${styles.nav_link}`} href="#">
                Blog
              </a>
            </li>
            <li>
              <a class={`${styles.nav_link}`} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`${styles.menu} ${open ? styles.opened : ""}`}
        >
          <div className={styles.middle}></div>
        </div>
      </nav>
    </>
  );
};
