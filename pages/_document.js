import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script src="../path/to/flowbite/dist/flowbite.js"></script>

          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#040404" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
