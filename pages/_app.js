import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from 'blockstack-ui';
import { normalize } from 'polished';

/**
 * Reset our styles
 */
const Global = createGlobalStyle`
${normalize()};
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  
}
html{
display: flex;
}
body{
flex-grow: 1;
}
body, html{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100%;
  margin: 0;
  height: auto;
  width: 100%;
  max-width: 100%;
  
}
#__next{
  min-height:100%;
  margin:0;
  display: flex;
  flex-direction: column;
}
a:link {
  text-decoration: underline;
}
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const props = {
      ...pageProps,
    };

    return {
      pageProps: props,
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <>
          <Global />
          <ThemeProvider theme={{ ...theme, transitions: ['unset', '.34s all cubic-bezier(.19,1,.22,1)'] }}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      </Container>
    );
  }
}

export default MyApp;
