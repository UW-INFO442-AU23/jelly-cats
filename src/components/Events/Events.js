import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar.js";
import { getDatabase, ref, get } from 'firebase/database';
import { initializeApp } from "firebase/app";
import Filter from './Filter.js'
import EventCard from "../EventCard/EventCard.js";

import arrow from '../../imgs/Events/Arrow.png';

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
    const [langLevel, setLangLevel] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const eventsRef = ref(database, 'Events');

        get(eventsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
            const eventsData = snapshot.val();

            // Extract data from the firebase
            const eventLanguages = Array.from(new Set(Object.values(eventsData).map((event) => event.Language)));
            const eventLocations = Array.from(new Set(Object.values(eventsData).map((event) => event.Location)));
            const eventLangLevels = Array.from(new Set(Object.values(eventsData).map((event) => event["Language Level"])));

            setEvents(eventsData);
            setLanguages(eventLanguages);
            setLocations(eventLocations);
            setLangLevel(eventLangLevels)
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
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className="flex flex-col justify-center mt-12 mx-14 md:mx-20 lg:mx-36">
                {/* Introduction */}
                <div className="mt-10 md:mt-20">
                    <p className="text-lg font-bold md:text-2xl lg:text-4xl">Upcoming Events</p>
                    <p className="mt-8 md:text-lg lg:text-2xl">Find an upcoming language-learning event that suits your learning needs! Use filters to refine your search.</p>
                </div>
                {/* Filter */}
                <div className="flex flex-row items-center justify-between mt-8">
                    <div className="flex">
                        {/* filter by location*/}
                        {/* <div className="flex flex-row items-center justify-between px-4 py-2 border-4 border-indigo-500 rounded-full mr-7"> */}
                        <Filter defaultVal="All Languages" options={languages}/>
                        <Filter defaultVal="All Language Levels" options={langLevel}/>
                        <Filter defaultVal="All Locations" options={locations}/>
                    </div>
                        <Filter defaultVal="Sort by date" options={["Ascending", "Descending"]} />
                </div>
                
            </div>
            {/*Events */}
            <div className="grid my-6 mx-14 md:mx-20 lg:mx-36">
                    <EventCard />
                </div>
        </div>
    );
}
