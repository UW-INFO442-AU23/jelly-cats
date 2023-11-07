import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase.js";
import { ref, get, update } from "firebase/database";

export default function Register(props) {
    const email = props.email;
    const emailKey = email.replace('.', ',');
    const eventName = props.eventName;
    const eventData = props.eventData;
    const [isRegistered, setIsRegistered] = useState(false);
    const [atCapacity, setAtCapacity] = useState(false);

    useEffect(() => {
        const checkRegistration = async () => {
            const userEventsRef = ref(db, `Users/${emailKey}/Events/${eventName}`);
            const snapshot = await get(userEventsRef);
            setIsRegistered(snapshot.exists());
        };

        const checkCapacity = async () => {
            const eventRef = ref(db, `Events/${eventName}`);

            get(eventRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const event = snapshot.val();
                    setAtCapacity(event['Current Attendees'] >= event['Spot Limit']);
                } else {
                    console.log("No data found for events.");
                }
            })
        };

        checkRegistration();
        checkCapacity();
    }, [emailKey, eventName]);

    const handleButtonClick = async () => {
        try {
            const eventRef = ref(db, `Events/${eventName}`);
            const userEventsRef = ref(db, `Users/${emailKey}/Events`);
            const eventAttendeesRef = ref(db, `Events/${eventName}/Attendees`);
            if (isRegistered) {
                await update(userEventsRef, { [eventName]: null });
                await update(eventAttendeesRef, { [emailKey]: null });
                await update(eventRef, { "Current Attendees" : eventData["Current Attendees"] - 1 });
            } else {
                await update(userEventsRef, { [eventName]: true });
                await update(eventAttendeesRef, { [emailKey]: true });
                await update(eventRef, { "Current Attendees" : eventData["Current Attendees"] + 1 });
            }

            setIsRegistered(!isRegistered);

            props.onClose();
        } catch (error) {
            console.error("Error occurred during database operation:", error);
        }
    };
    
    return (
        <Link to="/events">
            <button
                onClick={handleButtonClick}
                className={`px-2 py-1 mx-2 md:px-4 md:py-2 md:mx-4 md:text-sm text-white rounded ${
                    (props.registerDisabled || atCapacity) ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 hover:bg-neutral-800 rounded-md'
                }`}
                disabled={props.registerDisabled || atCapacity}
            >
                {atCapacity}
                {isRegistered ? 'Unregister' : atCapacity ? 'Max Capacity' : 'Register'}
            </button>
        </Link>
    );
}