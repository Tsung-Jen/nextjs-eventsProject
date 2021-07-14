import Head from "next/head";

// import { getFeaturedEvents } from '../dummy-data';
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";

import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events Together</title>
        <meta
          name="description"
          content="Find a lot of excellent events that allow you to evolve..."
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
