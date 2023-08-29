import React from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import styles from "styles/Layout.module.css";

export const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header styles={styles} />
      {children}
      <Footer styles={styles} />
    </React.Fragment>
  );
};
