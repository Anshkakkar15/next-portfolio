import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Andika:wght@400;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Poppins:ital,wght@1,300&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
