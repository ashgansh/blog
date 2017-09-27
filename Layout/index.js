import React from 'react';
import { Base, Button, Header, Body, Footer } from './Wrappers'
import Head from "react-helmet";
import Link from '../Link'; 

const Layout = ({ children }) => (
  <Base>
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header> Benjamin Shafii
      <Link to="/">Go to home</Link>
  </Header>
    <Body>{children}</Body>
    <Footer className="footer"><Button onClick={() => window.scrollTo(0, 0) }>Go to Top</Button></Footer>
  </Base>
);

export default Layout;
