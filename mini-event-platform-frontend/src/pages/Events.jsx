import { useEffect, useState } from "react";
import api from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await api.get("/api/events");
      setEvents(res.data);
    } catch (err) {
      alert("Failed to load events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleRSVP = async (eventId) => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        `/api/events/${eventId}/rsvp`);

      alert("RSVP successful");
      fetchEvents();
    } catch (err) {
      alert("RSVP failed");
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h2>Events</h2>

      {events.length === 0 ? (
        <p>No events available</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event._id} style={{ marginBottom: "20px" }}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>{new Date(event.date).toDateString()}</p>
              <p>{event.location}</p>

              <button onClick={() => handleRSVP(event._id)}>
                RSVP
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Events;