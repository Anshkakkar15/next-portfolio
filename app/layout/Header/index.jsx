import React, { useEffect, useState } from "react";

export const Header = ({ styles }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window?.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <div className={styles.header}>
      <div className="d-flex justify-content-center align-content-center">
        <ul
          className={styles.nav_list}
          style={{
            backgroundColor: scrollY > 30 ? "#eff2e0" : "#f8f8f8",
          }}
        >
          <li>
            <a href="">
              Work <span>{`/`}</span>
            </a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Notes</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
