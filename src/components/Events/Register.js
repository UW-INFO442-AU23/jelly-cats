import React, { useEffect } from "react";
import { db } from "../../firebase.js";
import { ref, update } from "firebase/database";

export default function Register(props) {
    const user = props.user;
    const eventName = props.eventName;
    const eventData = props.eventData;

    function onRegister() {
        // Reference to the user's events in the database
        const userEventsRef = ref(db, `Users/${user.uid}/Events`);
        
        // Reference to the event's attendees in the database
        const eventRef = ref(db, `Events/${eventName}`);
        const eventAttendeesRef = ref(db, `Events/${eventName}/Attendees`);
    
        // Push event to the user's node
        update(userEventsRef, { [eventName]: true })
          .then(() => {
            // Push user to the event's attendees
            update(eventRef, { "Current Attendees" : eventData["Current Attendees"] + 1 });
            update(eventAttendeesRef, { [user.uid]: true })
              .then(() => {
                console.log("User registered for the event!");
              })
              .catch((error) => {
                console.error("Error adding user to event attendees:", error);
              });
          })
          .catch((error) => {
            console.error("Error adding event to user's events:", error);
          });
    };
    
    return (
        <button onClick={() => {
            onRegister();
            props.onClose();
        }} className="px-4 py-2 mx-4 text-white rounded bg-neutral-900">
            Register
        </button>
    );
}