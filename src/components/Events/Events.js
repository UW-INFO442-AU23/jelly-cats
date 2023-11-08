import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar.js';
import { getDatabase, ref, get } from 'firebase/database';
import Filter from './Filter.js'
import EventCard from "./EventCard.js";


export default function Events(props) {

    // states for filter options
    const [events, setEvents] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [langLevel, setLangLevel] = useState([]);
    const [locations, setLocations] = useState([]);
    
    // states for filtering data
    const [filteredEvents, setFilteredEvents] = useState([]); // State to store filtered events
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [selectedLanguageLevel, setSelectedLanguageLevel] = useState("All Language Levels");
    const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
    
    // effect to get data from firebase
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

    // effect to apply the filters whenever filter options change
    useEffect(() => {
        // Filter the events based on selected filter criteria
        const filtered = Object.entries(events).filter(([eventKey, eventData]) => {
            const event = eventData;
            const isLocationMatch = selectedLocation === "All Locations" || event.Location === selectedLocation;
            const isLanguageLevelMatch = selectedLanguageLevel === "All Language Levels" || event["Language Level"] === selectedLanguageLevel;
            const isLanguageMatch = selectedLanguage === "All Languages" || event.Language === selectedLanguage;
            
            return isLocationMatch && isLanguageLevelMatch && isLanguageMatch;
        });

        setFilteredEvents(filtered);
    }, [selectedLocation, selectedLanguageLevel, selectedLanguage, events]);

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
                <div className="flex flex-row items-center justify-center mt-8 md:justify-between">
                    <div className="flex">
                        {/* filter by location*/}
                        <Filter defaultVal="All Languages" options={languages} onSelect={(value) => setSelectedLanguage(value)} />
                        <Filter defaultVal="All Language Levels" options={langLevel} onSelect={(value) => setSelectedLanguageLevel(value)} />
                        <Filter defaultVal="All Locations" options={locations} onSelect={(value) => setSelectedLocation(value)} />
                    </div>
                        <Filter defaultVal="Sort by date" options={["Ascending", "Descending"]} />
                </div>
                
            </div>
            {/*Events */}
            <div className="grid grid-cols-1 min-[1440px]:grid-cols-2 gap-10 mt-12 mx-14 md:mx-20 xl:mx-28 ">
                {filteredEvents.map(([eventKey, eventData]) => (
                    <EventCard eventName={eventKey} eventData={eventData} user={props.user} />
                ))}
            </div>
        </div>
    );
}
