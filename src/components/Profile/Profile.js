import React, { useEffect, useState } from 'react';
import EventCard from '../Events/EventCard.js';
import { Navbar } from '../Navbar/Navbar.js';
import { db } from '../../firebase.js';
import { ref, get } from 'firebase/database';
import { Link } from 'react-router-dom';


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
        const eventsRef = ref(db, 'Events');

        get(userEventsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            const userEventsSnap = snapshot.val();
            const userEventsKeys = Object.keys(userEventsSnap);

            const registeredEventsKeys = userEventsKeys.filter(key => userEventsSnap[key].Registered === true);

            setUserEvents(registeredEventsKeys);

            } else {
                console.log("No data found for events.");
            }
        })
        .catch((error) => {
            console.error("Error reading events:", error);
        });

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
    }, [user, emailKey]);

    useEffect(() => {
        // Filter events based on user's registered events
        const filteredEventsData = Object.fromEntries(
            Object.entries(events)
                .filter(([eventName]) => userEvents.includes(eventName))
        );

        setFilteredEvents(filteredEventsData);
    }, [userEvents, events])
    
    return (
        <>
            <Navbar user={user} onSignOut={props.onSignOut} />
            <div className="flex flex-col justify-center mt-16 mx-14 md:mx-20 lg:mx-36">
                <div className="flex flex-col items-center justify-center">
                    <img src={user.photoURL} className="h-48 mt-10 mb-5 rounded-full w-fit" alt="profile"/>
                    <p className="text-4xl font-bold text-center">{user.displayName}</p>
                    <p className="mt-2 text-2xl text-center">{user.email}</p>
                </div>
            </div>
            {/*Events */}
            {Object.keys(filteredEvents).length === 0 && (
                <div className="flex flex-col mt-32 place-items-center mx-14">
                    <p className="mb-6 text-3xl font-bold text-center text-black">
                        You are currently not registerd for any events!
                    </p>
                    <p className="mb-12 text-2xl text-center text-black">
                        Your profile will populate any events you register for. Let's start exploring some events!
                    </p>
                    <Link to="/Events" className="px-2 py-1 mx-2 text-white bg-indigo-500 rounded-md md:px-4 md:py-2 md:mx-4 md:text-sm hover:bg-neutral-800">
                        Explore events
                    </Link>
                </div>
            )}
            <div className="grid grid-cols-1 min-[1440px]:grid-cols-2 gap-10 mt-12 mx-14 md:mx-20 xl:mx-28 ">
                {Object.entries(filteredEvents).map(([eventKey, eventData]) => (
                    <EventCard key={eventKey} eventName={eventKey} eventData={eventData} user={props.user} />
                ))}
            </div>
        </>
    );
}
