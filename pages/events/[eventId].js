import { Fragment } from "react";
// import { useRouter } from "next/router";

// import { getEventById } from "../../dummy-data";
import { getEventById, getAllEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";

function EventDetailPage(props) {
  // const router = useRouter();

  // const eventId = router.query.eventId; // gets the concrete values which are encoded in the eventId
  // const event = getEventById(eventId);
  const event = props.selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    }
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map(event => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: false
  };
}

export default EventDetailPage;
