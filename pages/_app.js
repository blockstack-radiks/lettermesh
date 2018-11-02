import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from 'blockstack-ui';
import { normalize } from 'polished';
import { configure } from 'radiks';
import getConfig from 'next/config';

import Layout from '../components/layout';

import withReduxStore from '../lib/with-redux-store';

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

class LetterMesh extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const cookies = ctx.req && ctx.req.universalCookies && ctx.req.universalCookies.cookies;

    return {
      pageProps,
      cookies,
    };
  }

  componentDidMount() {
    const radiksConfig = getConfig().publicRuntimeConfig.radiks;
    configure(radiksConfig);
  }

  render() {
    const {
      Component, pageProps, reduxStore, persistor, cookies,
    } = this.props;

    return (
      <Container>
        <>
          <Global />
          <ThemeProvider theme={{ ...theme, transitions: ['unset', '.34s all cubic-bezier(.19,1,.22,1)'] }}>
            <Provider store={reduxStore}>
              <PersistGate persistor={persistor}>
                <Layout>
                  <Component {...pageProps} serverCookies={cookies} />
                </Layout>
              </PersistGate>
            </Provider>
          </ThemeProvider>
        </>
      </Container>
    );
  }
}

export default withReduxStore(LetterMesh);
