import { Fragment } from "react";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Head>
          <title>Events Together</title>
          <meta name="description" content="Events Together" />
          <meta name="viewport" content="inital-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
