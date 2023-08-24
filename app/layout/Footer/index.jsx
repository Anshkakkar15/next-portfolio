import React, { useState } from "react";
import Link from "next/link";

export const Footer = ({ styles }) => {
  return (
    <footer className={styles.footer_head}>
      <div className="container">
        <div className="row justify-content-between mb-5">
          <div className="col-6">
            <div className={styles.site_logo}>
              <Link href="#">Logo</Link>
            </div>
          </div>
          <div className="col-6 text-md-right">
            <ul
              className={`list-unstyled d-flex justify-content-end ${styles.social_icon}`}
            >
              <li>
                <Link href="#" className="fb" style={{ background: "#3b579b" }}>
                  <i class="bi bi-linkedin text-white bg-transparent"></i>
                </Link>
              </li>
              <li>
                <Link href="#" className="tw" style={{ background: "#1f2328" }}>
                  <i class="bi bi-github text-white bg-transparent"></i>
                </Link>
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
