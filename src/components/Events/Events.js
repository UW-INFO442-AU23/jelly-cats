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
    const [selectedSortOption, setSelectedSortOption] = useState("Newest First");
    const [resetFilters, setResetFilters] = useState(false)

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
        // Filter and sort the events based on selected filter criteria
        const filteredAndSorted = Object.entries(events)
            //filter by criteria
            .filter(([eventKey, eventData]) => {
                const event = eventData;
                const isLocationMatch = selectedLocation === "All Locations" || event.Location === selectedLocation;
                const isLanguageLevelMatch = selectedLanguageLevel === "All Language Levels" || event["Language Level"] === selectedLanguageLevel;
                const isLanguageMatch = selectedLanguage === "All Languages" || event.Language === selectedLanguage;

                return isLocationMatch && isLanguageLevelMatch && isLanguageMatch;
            })
            // Sort by date
            .sort(([, a], [, b]) => {
                // removes st, nd, rd, th from numbers (making 5th => 5) for better parsing into Date Object
                const dateA = new Date(a.Date.replace(/(\d+)(st|nd|rd|th)/, '$1')).getTime();
                const dateB = new Date(b.Date.replace(/(\d+)(st|nd|rd|th)/, '$1')).getTime();

                return selectedSortOption === "Newest First" ? dateA - dateB : dateB - dateA;
            });

        setFilteredEvents(filteredAndSorted);
    }, [selectedLocation, selectedLanguageLevel, selectedLanguage, selectedSortOption, events, resetFilters]);


    return (
        <>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className="flex flex-col justify-center mt-12">
                {/* Introduction */}
                <div className="mt-10 md:mt-20 max-[600px]:mx-8 mx-14 md:mx-20 lg:mx-36">
                    <p className="max-[600px]:text-sm text-lg font-bold md:text-2xl lg:text-4xl">Upcoming Events</p>
                    <p className="max-[600px]:text-xs max-[600px]:mt-2 mt-8 md:text-lg lg:text-2xl">Find an upcoming language-learning event that suits your learning needs! Use filters to refine your search.</p>
                </div>
                {/* Filter */}
                <div className="flex flex-row flex-wrap items-center justify-center mt-8 gap-y-6">
                    <div className="flex justify-center gap-4 sm:justify-normal basis-3/4">
                        {/* filter by location*/}
                        <Filter defaultVal="All Languages" options={languages} onSelect={(value) => setSelectedLanguage(value)} shouldReset={resetFilters} />
                        <Filter defaultVal="All Language Levels" options={langLevel} onSelect={(value) => setSelectedLanguageLevel(value)} shouldReset={resetFilters} />
                        <Filter defaultVal="All Locations" options={locations} onSelect={(value) => setSelectedLocation(value)} shouldReset={resetFilters} />
                    </div>
                    <Filter defaultVal="Newest First" options={["Oldest First"]} onSelect={(value) => setSelectedSortOption(value)} shouldReset={resetFilters} />
                </div>

            </div>
            {/*Events */}
            {filteredEvents.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-6 mt-56 mx-14">
                    <h3 className='text-lg font-bold text-center text-black sm:text-3xl'>No results found!</h3>
                    <p className="text-lg text-center text-black sm:text-3xl">There are no items matching your criteria—try filtering for a different event.</p>
                    <button
                        className="px-4 py-2 text-lg text-white bg-indigo-500 rounded-xl md:px-7 md:py-3 hover:bg-neutral-800"
                        onClick={() => {
                            // Reset filters
                            setSelectedLocation("All Locations");
                            setSelectedLanguageLevel("All Language Levels");
                            setSelectedLanguage("All Languages");
                            setSelectedSortOption("Newest First");
                            setResetFilters(true);
                            setTimeout(() => {
                                setResetFilters(false);
                            }, 0);
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 gap-20 mt-12 sm:grid-cols-2 sm:gap-y-12 sm:gap-x-30 2xl:gap-y-20 2xl:gap-x-60">
                        {filteredEvents.map(([eventKey, eventData]) => (
                            <EventCard key={eventKey} eventName={eventKey} eventData={eventData} user={props.user} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}