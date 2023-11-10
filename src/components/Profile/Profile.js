import React, { useEffect, useState } from 'react';
import EventCard from '../Events/EventCard.js';
import { Navbar } from '../Navbar/Navbar.js';
import { db } from '../../firebase.js';
import { getDatabase, ref, get } from 'firebase/database';

export default function Profile(props) {
    const [userEvents, setUserEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);


    const user = props.user;
    const email = user.email;
    const emailKey = email.replace('.', ',');

    // gets a list of registered events for current user
    useEffect(() => {
        const userEventsRef = ref(db, `Users/${emailKey}/Events`);

        get(userEventsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            const userEventsSnap = snapshot.val();
            const userEventsKeys = Object.keys(userEventsSnap);

            setUserEvents(userEventsKeys);

            } else {
                console.log("No data found for events.");
            }
        })
        .catch((error) => {
            console.error("Error reading events:", error);
        });
    }, [user, emailKey]);

    useEffect(() => {
        const eventsRef = ref(db, 'Events');

        get(eventsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            const eventsData = snapshot.val();

            setEvents(eventsData);


            } else {
            console.log("No data found for events.");
            }
        })
        .catch((error) => {
            console.error("Error reading events:", error);
        });
    }, [user]);

    useEffect(() => {
        // Filter events based on user's registered events
        const filteredEventsData = Object.fromEntries(
            Object.entries(events)
                .filter(([eventName]) => userEvents.includes(eventName))
        );

        setFilteredEvents(filteredEventsData);
    }, [userEvents, events])
    
    return (
        <div>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className="flex flex-col justify-center mt-16 mx-14 md:mx-20 lg:mx-36">
                <div className="flex flex-col items-center justify-center">
                    <img src={user.photoURL} className="h-48 mt-10 mb-5 rounded-full w-fit" alt="profile"/>
                    <p className="text-4xl font-bold">{user.displayName}</p>
                    <p className="mt-2 text-2xl">{user.email}</p>
                </div>
            </div>
            {/*Events */}
            <div className="grid grid-cols-1 min-[1440px]:grid-cols-2 gap-10 mt-12 mx-14 md:mx-20 xl:mx-28 ">
                {Object.entries(filteredEvents).map(([eventKey, eventData]) => (
                    <EventCard key={eventKey} eventName={eventKey} eventData={eventData} user={props.user} />
                ))}
            </div>
        </div>
    );
}
