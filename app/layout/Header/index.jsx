import { HeaderData } from "app/common/mock";
import Link from "next/link";
import React, { useState } from "react";

export const Header = ({ styles }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        <nav className={styles.nav_wrapper}>
          <div className={styles.logo}>Logo</div>
          <div className="d-flex align-items-center">
            <div className={styles.contact_btn}>
              <button>Contact</button>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className={`${styles.menu} ${open ? styles.opened : ""}`}
            >
              <div className={styles.middle}></div>
            </div>
          </div>
        </nav>
      </div>
      <div className={`${styles.primary_nav} ${open ? styles.active : ""}`}>
        <ul className={`${styles.list} ${open ? styles.nav_opac : ""}`}>
          {HeaderData?.map((el) => {
            return (
              <li style={{ visibility: open ? "visible" : "hidden" }}>
                <Link
                  className={`${styles.nav_link}`}
                  href={el?.slug}
                  onClick={() => setOpen(false)}
                >
                  {el?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
