import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import { connect } from 'react-redux';
import Layout from '../src/components/Layout';
import SuscribeSection from '../src/components/Suscribe'


class Index extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    // store.dispatch({ type: 'FOO', payload: 'foo' }); // component will be able to read from store's state when rendered
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }

  render() {
    // const { classes } = this.props;
    const { classes } = this.props;
    return (
      <Layout title="Home">
        <div  >
          <SuscribeSection/>
          {/* <div className={classes.primary}>
sdadasd
          </div> */}
          {/* <div id={'inicio'} className={classes.backGrounWave}
            style={{
              backgroundImage: 'url(' + imageUrl + ')',
            }}>

            <div className={classes.mainContent}>
              <div style={{ flex: 1 }}>
                <div style={{}}>
                  <h1 className={classes.mainDescription}>
                    DESARROLLAMOS SOLUCIONES TECNOLÓGICAS A MEDIDA.
              </h1>
                </div>


              </div>
              <Grow in={true} timeout={1000}>
                <div className={classes.mainContentPhone}>
                  <img className={classes.imgResponsive} src={Phone} alt="Logo" />
                </div>
              </Grow>
            </div>
          </div> */}
        </div>
      </Layout>
    );
  }
}
export default connect(state => state)(Index);
