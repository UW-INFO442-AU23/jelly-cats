import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase.js';
import { ref, get, update } from 'firebase/database';

export default function Register(props) {
    const email = props.email;
    const emailKey = email.replace('.', ',');
    const eventName = props.eventName;
    const eventData = props.eventData;
    const [isChecked, setIsChecked] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [atCapacity, setAtCapacity] = useState(false);
    const registerDisabled = !(email && isChecked);

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

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

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
        <div className="flex flex-col items-center justify-center gap-5">
            {!isRegistered ? 
                <div className="flex flex-row items-center justify-center">
                    <input
                        type="checkbox"
                        id="myCheckbox"
                        name="myCheckbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="ml-5 mr-5 md:w-16 md:h-16 md:ml-5 md:mr-5 xl:ml-5 xl:mr-10 xl:w-12 xl:h-12 form-checkbox"
                    />
                    <label htmlFor="myCheckbox" className="text-xs xl:text-lg">
                        <b>Event Policy:</b> By agreeing, you acknowledge that you are accountable for showing up to this event—you 
                        can unregister using the same email. Meeting information will be sent after registration.
                    </label>
                </div>
            : <div/>}
            <Link to={isRegistered ? '/unregistered' : '/registered'}>
                <button
                    onClick={handleButtonClick}
                    className={`px-2 py-1 mx-2 md:px-4 md:py-2 md:mx-4 md:text-sm text-white rounded ${
                        ((registerDisabled || (atCapacity && !isRegistered)) && !isRegistered) ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 hover:bg-neutral-800 rounded-md'
                    }`}
                    disabled={!isRegistered ? (registerDisabled || (atCapacity && !isRegistered)) : false}
                >
                    {atCapacity}
                    {isRegistered ? 'Unregister' : atCapacity ? 'Max Capacity' : 'Register'}
                </button>
            </Link>
        </div>
    );
}