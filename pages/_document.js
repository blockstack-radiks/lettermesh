import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
body, html{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="/static/nprogress.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Roboto+Slab:400,700" rel="stylesheet" />
          <script src="/static/nprogress.js" />
          {this.props.styleTags}
        </Head>
        <Global />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
