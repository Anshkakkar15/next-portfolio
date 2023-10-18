import React from "react";
import Link from "next/link";

export const Footer = ({ styles }) => {
  return (
    <footer className={styles.footer_head}>
      <div className="container">
        <div className="row justify-content-between mb-2">
          <div className="col-6">
            <div className={styles.site_logo}>
              <Link href="/">Logo</Link>
            </div>
          </div>
          <div className="col-6 text-md-right">
            <ul
              className={`list-unstyled d-flex justify-content-end ${styles.social_icon}`}
            >
              <li>
                <a
                  href="https://in.linkedin.com/in/ansh-kakkar-65464922b"
                  className="fb"
                  target="_blank"
                  style={{ background: "#3b579b" }}
                >
                  <i className="bi bi-linkedin text-white bg-transparent"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Anshkakkar15"
                  className="tw"
                  target="_blank"
                  style={{ background: "#1f2328" }}
                >
                  <i className="bi bi-github text-white bg-transparent"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kakkaransh40@gmail.com"
                  className="tw"
                  style={{ background: "#1f2328" }}
                >
                  <i className="bi bi-envelope text-white bg-transparent"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.copyright} text-center `}>
          <p className="mb-0">
            Copyright {new Date()?.getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
