import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { configure } from 'radiks';
import getConfig from 'next/config';
import { withRouter } from 'next/router';

import theme from '../lib/theme';
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
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

const radiksConfig = getConfig().publicRuntimeConfig.radiks;
if (typeof 'process' !== 'undefined') {
  radiksConfig.apiServer = process.env.RADIKS_API_URL;
}


class LetterMesh extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    console.log(radiksConfig);
    configure(radiksConfig);

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
    console.log(radiksConfig);
    configure(radiksConfig);
    const { router } = this.props;
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
  }

  render() {
    const {
      Component, pageProps, reduxStore, persistor, cookies,
    } = this.props;

    const { useContainer } = pageProps;

    return (
      <Container>
        <>
          <Global />
          <ThemeProvider theme={{ ...theme, transitions: ['unset', '.34s all cubic-bezier(.19,1,.22,1)'] }}>
            <Provider store={reduxStore}>
              <PersistGate persistor={persistor}>
                <Layout useContainer={useContainer} blogHeaderImage={pageProps && pageProps.blogHeaderImage}>
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

export default withRouter(withReduxStore(LetterMesh));
