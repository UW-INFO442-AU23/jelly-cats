import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import { Navbar } from '../Navbar/Navbar.js'
import Register from './Register.js';

const eventBanner = {
    ASL_Market: require('../../imgs/Events/ASL Market/banner.png'),
    French_Bakery: require('../../imgs/Events/French Bakery/banner.png'),
    Spanish_Beach: require('../../imgs/Events/Spanish Beach/banner.png'),
    Spanish_Eats: require('../../imgs/Events/Spanish Eats/banner.png')
};

const eventOrg = {
    ASL_Market: require('../../imgs/Events/ASL Market/org.png'),
    French_Bakery: require('../../imgs/Events/French Bakery/org.png'),
    Spanish_Beach: require('../../imgs/Events/Spanish Beach/org.png'),
    Spanish_Eats: require('../../imgs/Events/Spanish Eats/org.png')
};

export default function EventPage(props) {
    const user = props.user;
    const { eventName } = useParams();
    const [eventData, setEventData] = useState([]);
    const [eventHost, setEventHost] = useState([]);

    const eventBannerImg = eventBanner[eventName.replace(/ /g, '_')];
    const eventOrgImg = eventOrg[eventName.replace(/ /g, '_')];

    useEffect(() => {
        const database = getDatabase();
        const eventsRef = ref(database, `Events/${eventName}`);
        get(eventsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const event = snapshot.val();
                setEventData(event);
                setEventHost(event.Host);
            } else {
                console.log("No data found for events.");
            }
        })
        .catch((error) => {
            console.error("Error reading events:", error);
        });
    }, [eventName, eventData]);

    const [email, setEmail] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const [isChecked, setIsChecked] = useState(false);
    const registerDisabled = !(email && isChecked);

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(inputEmail)) {
            const inputEmail = e.target.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailPattern.test(inputEmail)) {
                setEmail(inputEmail);
            }
        }
    }

    return (
        <div>
            <div className="flex justify-center mt-20">
                <img src={eventBannerImg} alt="event banner" className="w-9/12 darken"/>
            </div>
            <div className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/2">
                <h1 className="text-6xl font-bold">{eventName}</h1>
                <div className="flex flex-row justify-center gap-2 mt-2">
                    <div className="flex flex-row">
                        <p className="lg:text-lg xl:text-2xl">{eventData["Spot Limit"] - eventData["Current Attendees"]}</p>
                        <p className="lg:mt-1 xl:text-xl">/{eventData["Spot Limit"]}</p>
                    </div>
                    <p className=" lg:text-lg xl:text-xl">Spots Available</p>
                </div>
            </div>
            {/* Event Details */}
            <div className="absolute flex flex-col items-center justify-center w-3/5 p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl sm:flex-row rounded-2xl top-1/5 left-1/2">
                {/* Event Name + Available Spots */}
                <img src={eventOrgImg} alt="organization" className="w-fit"/>
                <div className="hidden sm:inline-block inline-block h-[145px] min-h-[1em] w-0.5 bg-gray-200"></div>
                {/* Event Information Section */}
                <div className="flex flex-col justify-center w-full gap-5">
                    {/* Event Date/Time/Location/Level */}
                    <div className="flex flex-row justify-between px-6">
                        <div id="location" className="flex flex-col max-[750px]:place-self-center">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] mt-1 fill-none">
                                    <path d="M6.18519 15.2621C8.87373 12.4967 11.5623 10.0205 11.5623 6.96598C11.5623 3.91145 9.15488 1.43526 6.18519 1.43526C3.21551 1.43526 0.808105 3.91145 0.808105 6.96598C0.808105 10.0205 3.49665 12.4967 6.18519 15.2621Z" stroke="#000000" stroke-width="1.17078"/>
                                    <path d="M6.18532 9.1173C7.45808 9.1173 8.48979 8.08559 8.48979 6.81283C8.48979 5.54012 7.45808 4.50837 6.18532 4.50837C4.91257 4.50837 3.88086 5.54012 3.88086 6.81283C3.88086 8.08559 4.91257 9.1173 6.18532 9.1173Z" stroke="#000000" stroke-width="1.17078"/>
                                </svg>
                                <p className="font-bold text-xs xl:text-xl max-[750px]:text-xs">Location</p>
                            </div>
                            <p className="text-xs xl:text-xl max-[750px]:text-xs">{eventData.Location}</p>
                        </div>
                        <div className="inline-block h-[53px] w-0.5 bg-gray-200"></div>
                        <div id="time" className="flex flex-col max-[750px]:place-self-center">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] mt-1 fill-none">
                                    <path d="M7.7215 3.98493V7.8257H10.026M14.6349 7.8257C14.6349 11.6439 11.5397 14.7391 7.7215 14.7391C3.90334 14.7391 0.808105 11.6439 0.808105 7.8257C0.808105 4.00754 3.90334 0.912308 7.7215 0.912308C11.5397 0.912308 14.6349 4.00754 14.6349 7.8257Z" stroke="#000000" stroke-width="1.17078"/>
                                </svg>
                                <p className="font-bold text-xs xl:text-xl max-[750px]:text-xs">Time</p>
                            </div>
                            <p className="text-xs xl:text-xl max-[750px]:text-xs">{eventData.Time}</p>
                        </div>
                        <div className="inline-block h-[53px] w-0.5 bg-gray-200"></div>
                        <div id="date" className="flex flex-col max-[750px]:place-self-center">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] fill-none mt-1">
                                    <path d="M0.808105 5.99827H14.6349M11.5623 9.07197L3.88073 9.07089M6.44122 12.1439L3.88073 12.1435M3.88073 1.38934V2.92565M11.5623 1.38934V2.92565M3.2662 15.2161H12.1768C13.0372 15.2161 13.4675 15.2161 13.7961 15.0487C14.0851 14.9014 14.3202 14.6664 14.4674 14.3773C14.6349 14.0487 14.6349 13.6184 14.6349 12.758V5.38375C14.6349 4.52333 14.6349 4.09313 14.4674 3.76449C14.3202 3.47541 14.0851 3.24039 13.7961 3.0931C13.4675 2.92565 13.0372 2.92565 12.1768 2.92565H3.2662C2.40579 2.92565 1.97558 2.92565 1.64695 3.0931C1.35787 3.24039 1.12284 3.47541 0.975556 3.76449C0.808105 4.09313 0.808105 4.52333 0.808105 5.38375V12.758C0.808105 13.6184 0.808105 14.0487 0.975556 14.3773C1.12284 14.6664 1.35787 14.9014 1.64695 15.0487C1.97558 15.2161 2.40578 15.2161 3.2662 15.2161Z" stroke="#000000" stroke-width="1.17078"/>
                                </svg>
                                <p className="font-bold text-xs xl:text-xl max-[750px]:text-xs">Date</p>
                            </div>
                            <p className="text-xs xl:text-xl max-[750px]:text-xs ">{eventData.Date}</p>
                        </div>
                        <div className="inline-block h-[53px] w-0.5 bg-gray-200"></div>
                        <div id="difficulty" className="flex flex-col max-[750px]:place-self-center">
                            <div className="flex flex-row">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px] mt-1 fill-none">
                                    <path d="M7.03928 2.09391C7.21711 1.69494 7.30606 1.49546 7.42989 1.43403C7.53743 1.38066 7.66372 1.38066 7.77126 1.43403C7.89508 1.49546 7.98404 1.69494 8.16186 2.09391L9.57834 5.27171C9.63096 5.38966 9.65723 5.44863 9.69794 5.49379C9.73389 5.53375 9.77791 5.56571 9.82699 5.58759C9.88253 5.61232 9.94675 5.6191 10.0752 5.63265L13.5352 5.99783C13.9696 6.04368 14.1867 6.0666 14.2834 6.16538C14.3674 6.25117 14.4064 6.37131 14.3889 6.4901C14.3688 6.62683 14.2066 6.77301 13.8821 7.06545L11.2975 9.39465C11.2016 9.48106 11.1536 9.52431 11.1233 9.57693C11.0964 9.62356 11.0795 9.67525 11.0739 9.72872C11.0676 9.78917 11.0809 9.85231 11.1077 9.97868L11.8297 13.3821C11.9203 13.8095 11.9656 14.0231 11.9016 14.1455C11.8459 14.252 11.7437 14.3262 11.6253 14.3463C11.4891 14.3693 11.2999 14.2602 10.9215 14.042L7.90761 12.3037C7.79576 12.2391 7.73984 12.2069 7.68038 12.1943C7.62777 12.1831 7.57338 12.1831 7.52076 12.1943C7.46131 12.2069 7.40539 12.2391 7.29354 12.3037L4.2797 14.042C3.90132 14.2602 3.71213 14.3693 3.57586 14.3463C3.45748 14.3262 3.35528 14.252 3.29963 14.1455C3.23558 14.0231 3.28089 13.8095 3.37153 13.3821L4.09341 9.97868C4.1202 9.85231 4.1336 9.78917 4.12724 9.72872C4.12161 9.67525 4.10481 9.62356 4.07792 9.57693C4.04754 9.52431 3.99958 9.48106 3.90366 9.39465L1.31911 7.06545C0.994632 6.77301 0.83239 6.62683 0.812218 6.4901C0.794704 6.37131 0.833734 6.25117 0.917724 6.16538C1.01442 6.0666 1.23162 6.04368 1.66601 5.99783L5.126 5.63265C5.25442 5.6191 5.31862 5.61232 5.37414 5.58759C5.42327 5.56571 5.46725 5.53375 5.50325 5.49379C5.54392 5.44863 5.57021 5.38966 5.62279 5.27171L7.03928 2.09391Z" stroke="#000000" stroke-width="1.17078"/>
                                </svg>
                                <p className="font-bold text-xs xl:text-xl max-[750px]:text-xs">Level</p>
                            </div>
                            <p className="text-xs xl:text-xl max-[750px]:text-xs">{eventData["Language Level"]}</p>
                        </div>
                    </div>
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
                    {/* Register */}
                    <div className="flex justify-between mx-60">
                        <Link to={`/events/${eventName}/vocabulary`}>
                            <button className="px-2 py-1 mx-2 text-white bg-indigo-500 rounded rounded-md md:px-4 md:py-2 md:mx-4 md:text-sm hover:bg-neutral-800">
                                Vocab List
                            </button>
                        </Link>
                        {user ? (
                            <div>
                                <Register email={user.email} eventName={eventName} eventData={eventData}/>
                            </div>
                        ) : (
                            <div>
                                <input type="text" name="email" id="email" onChange={handleEmailChange} className="flex-1 py-2 text-xs text-gray-900 border-2 rounded-md sm:text-sm md:text-xs lg:text-sm placeholder:text-gray-500 w-36 lg:w-52 xl:w-80 2xl:w-96" placeholder="email@domain.com"/>
                                <Register email={email} eventName={eventName} eventData={eventData}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Event Description + Host Information */}
            <div className="flex flex-col items-center justify-center gap-5 mt-40 sm:gap-0 sm:justify-between sm:m-40 sm:flex-row">
                <div className="flex flex-col w-1/2 gap-4">
                    <h2 className="text-3xl font-bold">Event Description</h2>
                    <hr class="border-t-2 border-gray-300"></hr>
                    <p className="text-xl">{eventData.Description}</p>
                </div>
                <div className="flex justify-center w-1/2 rounded-xl">
                    <div className="flex flex-col w-3/5 gap-3 text-center bg-white shadow-2xl rounded-2xl sm:gap-0">
                        <div className="flex w-full p-4 bg-indigo-500 rounded-t-2xl">
                            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-10 mt-5">
                            <img src={eventHost.Photo} alt="event host" className="w-1/3 rounded-xl"></img>
                            <div className="flex flex-col justify-between gap-1">
                                <p className="text-xl font-bold">{eventHost.Name}</p>
                                <div className="flex flex-row items-center justify-center gap-1">
                                    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="17" cy="17.5" r="17" fill="#5A6BC8"/>
                                        <path d="M9.88867 13.7779L15.3998 17.9112C16.348 18.6223 17.6516 18.6223 18.5998 17.9112L24.1109 13.7778" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M23.2222 12H10.7778C9.79594 12 9 12.7959 9 13.7778V22.6667C9 23.6485 9.79594 24.4444 10.7778 24.4444H23.2222C24.2041 24.4444 25 23.6485 25 22.6667V13.7778C25 12.7959 24.2041 12 23.2222 12Z" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                                    </svg>
                                    <p className="">{eventHost.Email}</p>
                                </div>
                            </div>
                        </div>
                        <p className="m-5 text-center"><span className="font-bold">Description:</span> {eventHost.Description}</p>
                    </div>
                </div>
            </div>
            <Navbar user={user} onSignOut={props.onSignOut}/>
        </div>
    );
}