import "styles/Globals.css";
import { MasterLayout } from "app/layout";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <MasterLayout>
      <Component {...pageProps} />
    </MasterLayout>
  );
}
