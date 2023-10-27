import React, { useEffect, useState } from "react";
import Register from './Register.js';
import asl from '../../imgs/Home/ASL.png';
import x from '../../imgs/Navbar/X.png';

export default function Popup(props) {
    const user = props.user;
    const eventName = props.eventName;
    const eventData = props.eventData;
    const [email, setEmail] = useState('');

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleemailChange = (e) => {
        setEmail(e.target.value);
    }

    const registerDisabled = !(email && isChecked);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="relative flex items-center w-4/5 text-black bg-white shadow-lg rounded-3xl">
                    {/* Event Image */}
                    <div className="w-1/2 h-full">
                        <img src={asl} alt="Event popup" className="w-full h-full"/>
                    </div>

                    {/* Event Information Section */}
                    <div className="flex flex-col justify-center w-1/2 gap-10">
                        {/* Event Details */}
                        <div className="flex flex-row items-center justify-between mx-10 mt-5">
                            <div className="flex flex-col">
                                <p className="mb-4 text-2xl font-bold">{eventName}</p>
                                <p>Date: {eventData.Date}</p>
                                <p>Time: {eventData.Time}</p>
                                <p>Location: {eventData.Location}</p>
                                <p>Language Level: {eventData["Language Level"]}</p>
                            </div>
                            <div>
                                <div className="flex flex-row">
                                    <div className="text-6xl font-bold">{eventData["Current Attendees"]}</div>
                                    <div className="mt-5 text-4xl font-bold">/{eventData["Spot Limit"]}</div>
                                </div>
                            </div>
                        </div>
                        <img src={x} alt="close" className="absolute top-0 right-0 m-4 cursor-pointer" onClick={props.onClose}/>
                        {/* Event Description */}
                        <div className="w-full px-10 py-10 text-lg text-white bg-indigo-500">
                            <p>{eventData.Description}</p>
                        </div>
                        {/* Event Policy */}
                        <div className="flex flex-row px-6 mb-10">
                            <input
                                type="checkbox"
                                id="myCheckbox"
                                name="myCheckbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                className="w-16 h-16 ml-6 mr-10 form-checkbox"
                            />
                            <label htmlFor="myCheckbox" className="text-lg"><b>Event Policy:</b> By agreeing, you acknowledge that you are accountable for showing up to this event,
                                    but you do have the option to unregister. Meeting information will be sent after registration.</label>
                        </div>
                        {/* Register */}
                        <div>
                            <div className="flex justify-center mb-5">
                                {user ? (
                                    <div>
                                        <Register registerDisabled={!isChecked} email={user.email} eventName={eventName} eventData={eventData} onClose={props.onClose}/>
                                    </div>
                                ) : (
                                    <div>
                                        <input type="text" name="email" id="email" autocomplete="email" value={email} onChange={handleemailChange} className="flex-1 py-2 text-gray-900 border-2 rounded-md placeholder:text-gray-500 sm:text-sm w-96" placeholder="email@domain.com"/>
                                        <Register registerDisabled={registerDisabled} email={email} eventName={eventName} eventData={eventData} onClose={props.onClose}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}