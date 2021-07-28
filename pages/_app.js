// import { Fragment } from "react";
import Head from 'next/head';
import Layout from "../components/layout/Layout";
// import Notification from "../components/ui/Notification";
import { NotificationContextProvider } from "../store/NotificationContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Events Together</title>
          <meta name="description" content="Events Together" />
          <meta name="viewport" content="inital-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
        
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
