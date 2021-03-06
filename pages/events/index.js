import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// import { getAllEvents } from '../../dummy-data';
import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

function AllEventsPage(props) {
  const router = useRouter(); // used for programmatic navigation
  // const events = getAllEvents();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of excellent events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );  
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events
    },
    revalidate: 60
  };
}

export default AllEventsPage;