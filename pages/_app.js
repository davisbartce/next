import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { register, unregister } from 'next-offline/runtime';

//  redux initialize
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { configureStore } from '../src/redux';

export default withRedux(configureStore, { debug: true })(
  class MyApp extends App {

    componentDidMount () {
      register()
    }
    componentWillUnmount () {
      unregister()
    }

    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <Container>
          <Provider store={store}>
            <Head>
              <title>My page</title>
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </Container >
      );
    }
  }

);