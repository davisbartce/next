import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
// import actions from '../redux/actions';

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* TODO ELIMINAR MENU */}
    {/* <div className="tabs is-centered">
      <ul>
        <Link href="/"><a>Home</a></Link>
        {!isAuthenticated && <Link href="/signin"><a>Sign In</a></Link>}
        {!isAuthenticated && <Link href="/signup"><a>Sign Up</a></Link>}
        {isAuthenticated && <Link href="/users"><a>Profile</a></Link>}
        {isAuthenticated && <li onClick={deauthenticate}><a>Sign Out</a></li>}
      </ul>
    </div> */}

    <div className="has-text-centered">
      { children }
    </div>
  </div>
);

const mapStateToProps = (state) => (
  {}
);

export default connect(mapStateToProps)(Layout);