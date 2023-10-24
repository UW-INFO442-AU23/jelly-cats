import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar.js";
import arrow from '../../imgs/Events/Arrow.png';

//import the function from the realtime database module
import { getDatabase, ref, get } from 'firebase/database';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAjDJtvu0NuE44_Xs2qNZADRJq_lMc9-2c",
    authDomain: "kinguistics-6dd7e.firebaseapp.com",
    projectId: "kinguistics-6dd7e",
    storageBucket: "kinguistics-6dd7e.appspot.com",
    messagingSenderId: "1084695766941",
    appId: "1:1084695766941:web:65e08e8b08f9d4891c3174",
};

const app = initializeApp(firebaseConfig);

export default function Events(props) {
    const [events, setEvents] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const eventsRef = ref(database, 'Events');

        get(eventsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            const eventsData = snapshot.val();

            // Extract events, languages, and locations from the data
            const eventTitles = Object.keys(eventsData);
            const eventLanguages = Array.from(new Set(Object.values(eventsData).map((event) => event.Language)));
            const eventLocations = Array.from(new Set(Object.values(eventsData).map((event) => event.Location)));

            setEvents(eventTitles);
            setLanguages(eventLanguages);
            setLocations(eventLocations);
            } else {
            console.log("No data found for events.");
            }
        })
        .catch((error) => {
            console.error("Error reading events:", error);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center mx-14 md:mx-20 lg:mx-36">
                {/* Introduction */}
                <div className="mt-10 md:mt-20">
                    <p className="text-lg md:text-2xl lg:text-4xl font-bold">Upcoming Events</p>
                    <p className="mt-8 md:text-lg lg:text-2xl">Find an upcoming language-learning event that suits your learning needs! Use filters to refine your search.</p>
                </div>
                {/* Filter */}
                <div className="flex flex-row justify-between items-center mt-8">
                    <div className="flex">
                        {/* filter by location*/}
                        <div className="flex flex-row items-center justify-between border-4 border-indigo-500 rounded-full py-2 px-4 mr-7">
                            <p className="mr-10">Location</p>
                            <img src={ arrow } className="h-fit"/>
                        </div>
                        
                        {/* filter by language level*/}
                        <div className="flex flex-row items-center justify-between border-4 border-indigo-500 rounded-full py-2 px-4 mr-7">
                            <p className="mr-10">Language Level</p>
                            <img src={ arrow } className="h-fit"/>
                        </div>
                        {/* filter by language*/}
                        <div className="flex flex-row items-center justify-between border-4 border-indigo-500 rounded-full py-2 px-4 mr-7">
                            <p className="mr-10">Language</p>
                            <img src={ arrow } className="h-fit"/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between border-4 border-indigo-500 rounded-full py-2 px-4">
                            <p className="mr-10">Sort by date</p>
                            <img src={ arrow } className="h-fit"/>
                    </div>
                </div>
            </div>

            

            {/* Events
            <div className="mx-14 md:mx-20 lg:mx-36">
                <h2>Event List</h2>
                <ul>
                    {events.map((event) => (
                    <li key={event}>
                        {event}
                    </li>
                    ))}
                </ul>
                <div></div>
                <h2>languages List</h2>
                <ul>
                    {languages.map((languages) => (
                    <li key={languages}>
                        {languages}
                    </li>
                    ))}
                </ul>
                <div></div>
                <h2>locations List</h2>
                <ul>
                    {locations.map((locations) => (
                    <li key={locations}>
                        {locations}
                    </li>
                    ))}
                </ul>
                
            </div> */}
        </div>
    );
}
