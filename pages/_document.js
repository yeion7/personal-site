import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#333" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          />

          <meta property="og:url" content="https://yeion7.now.sh" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Yeison Daza" />
          <meta property="og:description" content="Build platforms with read" />
          <meta property="og:image" content="/static/avatar.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yeion7" />
          <meta name="twitter:creator" content="@yeion7" />
          <meta name="twitter:title" content="Yeison Daza" />
          <meta name="twitter:description" content="Personal page" />
          <meta name="twitter:image" content="/static/avatar.jpg" />

          <link href="/static/favicon.ico" rel="icon" type="image/x-icon" />
          <meta name="description" content="Build platforms with read" />
          <title>Yeison Daza</title>

          <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        color: #333;
        font-size: 16px;
        padding: 0 15px;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #48929B;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #22BAD9, 0 0 5px #48929B;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);

    `}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>

      </html>
    );
  }
}
