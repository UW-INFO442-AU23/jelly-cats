import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import { Navbar } from '../Navbar/Navbar.js'

export default function VocabPage(props) {
    const { eventName } = useParams();
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const eventsRef = ref(database, `Events/${eventName}`);
        get(eventsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const event = snapshot.val();
                setEventData(event);
            } else {
                console.log("No data found for events.");
            }
        })
        .catch((error) => {
            console.error("Error reading events:", error);
        });
    }, [eventName, eventData]);

    return (
        <div>
            <Navbar user={props.user} />
            <div className="flex flex-col items-center justify-center m-40">
                Test
            </div>
        </div>
    );
}