import React, { useState } from "react";
import { Link } from 'react-router-dom';

const languageImages = {
    ASL: require('../../imgs/Events/LASL.png'),
    Korean: require('../../imgs/Events/KR.png'),
    English: require('../../imgs/Events/EN.png'),
    Japanese: require('../../imgs/Events/JP.png'),
    Chinese: require('../../imgs/Events/CH.png'),
    Spanish: require('../../imgs/Events/SP.png'),
    French: require('../../imgs/Events/FR.png')
};

export default function EventCard({eventName, eventData, user}) {
    const [isOpen, setIsOpen] = useState(false);
    const language = eventData.Language;
    const languageImageSrc = languageImages[language];

    return (
        <div className="flex justify-center">
            {/* Event Card */}
            <div className="flex w-[590px] bg-indigo-500 h-[225px] justify-left p-5 gap-6 rounded-[20px] max-[750px]:flex-col max-[750px]:w-[275px] max-[750px]:h-[415px] max-[750px]:p-0 max-[750px]:gap-4" >
                    {/*I mg Place Holder */}
                    <div id="imgPlaceholder" className="flex justify-center items-center w-44 h-44 place-self-center max-[750px]:h-[200px] max-[750px]:w-[275px] max-[750px]:rounded-t-lg" >
                        <img src={languageImageSrc} className="w-[176px] h-[120px] object-cover" alt="language"></img>
                    </div>
                    {/* Event Information */}
                    <div id="eventInfo" className="flex gap-10 ml-auto text-white max-[750px]:m-0 max-[750px]:flex-col max-[750px]:content-center max-[750px]:justify-center max-[750px]:gap-4">
                        {/*Left Column Info (Title, Date, Time, Location, Difficulty) */}
                        <div id="leftColumn" className="flex gap-2.5 flex-col ">
                            <h1 className="text-xl font-bold max-[750px]:text-sm max-[750px]:place-self-center">{eventName}</h1>
                            <div id="info" className="flex flex-col gap-2">
                                <div id="date" className="flex gap-2 max-[750px]:place-self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] my-auto fill-none ">
                                        <path d="M0.808105 5.99827H14.6349M11.5623 9.07197L3.88073 9.07089M6.44122 12.1439L3.88073 12.1435M3.88073 1.38934V2.92565M11.5623 1.38934V2.92565M3.2662 15.2161H12.1768C13.0372 15.2161 13.4675 15.2161 13.7961 15.0487C14.0851 14.9014 14.3202 14.6664 14.4674 14.3773C14.6349 14.0487 14.6349 13.6184 14.6349 12.758V5.38375C14.6349 4.52333 14.6349 4.09313 14.4674 3.76449C14.3202 3.47541 14.0851 3.24039 13.7961 3.0931C13.4675 2.92565 13.0372 2.92565 12.1768 2.92565H3.2662C2.40579 2.92565 1.97558 2.92565 1.64695 3.0931C1.35787 3.24039 1.12284 3.47541 0.975556 3.76449C0.808105 4.09313 0.808105 4.52333 0.808105 5.38375V12.758C0.808105 13.6184 0.808105 14.0487 0.975556 14.3773C1.12284 14.6664 1.35787 14.9014 1.64695 15.0487C1.97558 15.2161 2.40578 15.2161 3.2662 15.2161Z" stroke="white" strokeWidth="1.17078"/>
                                    </svg>
                                    <p className="text-lg max-[750px]:text-xs ">{eventData.Date}</p>
                                </div>
                                <div id="time" className="flex gap-2 max-[750px]:place-self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] my-auto fill-none ">
                                        <path d="M7.7215 3.98493V7.8257H10.026M14.6349 7.8257C14.6349 11.6439 11.5397 14.7391 7.7215 14.7391C3.90334 14.7391 0.808105 11.6439 0.808105 7.8257C0.808105 4.00754 3.90334 0.912308 7.7215 0.912308C11.5397 0.912308 14.6349 4.00754 14.6349 7.8257Z" stroke="white" strokeWidth="1.17078"/>
                                    </svg>
                                    <p className="text-lg max-[750px]:text-xs">{eventData.Time}</p>
                                </div>
                                <div id="location" className="flex gap-2 max-[750px]:place-self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] my-auto fill-none ">
                                        <path d="M6.18519 15.2621C8.87373 12.4967 11.5623 10.0205 11.5623 6.96598C11.5623 3.91145 9.15488 1.43526 6.18519 1.43526C3.21551 1.43526 0.808105 3.91145 0.808105 6.96598C0.808105 10.0205 3.49665 12.4967 6.18519 15.2621Z" stroke="white" strokeWidth="1.17078"/>
                                        <path d="M6.18532 9.1173C7.45808 9.1173 8.48979 8.08559 8.48979 6.81283C8.48979 5.54012 7.45808 4.50837 6.18532 4.50837C4.91257 4.50837 3.88086 5.54012 3.88086 6.81283C3.88086 8.08559 4.91257 9.1173 6.18532 9.1173Z" stroke="white" strokeWidth="1.17078"/>
                                    </svg>
                                    <p className="text-lg max-[750px]:text-xs">{eventData.Location}</p>
                                </div>
                                <div id="difficulty" className="flex gap-2 max-[750px]:place-self-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] my-auto fill-none ">
                                        <path d="M7.03928 2.09391C7.21711 1.69494 7.30606 1.49546 7.42989 1.43403C7.53743 1.38066 7.66372 1.38066 7.77126 1.43403C7.89508 1.49546 7.98404 1.69494 8.16186 2.09391L9.57834 5.27171C9.63096 5.38966 9.65723 5.44863 9.69794 5.49379C9.73389 5.53375 9.77791 5.56571 9.82699 5.58759C9.88253 5.61232 9.94675 5.6191 10.0752 5.63265L13.5352 5.99783C13.9696 6.04368 14.1867 6.0666 14.2834 6.16538C14.3674 6.25117 14.4064 6.37131 14.3889 6.4901C14.3688 6.62683 14.2066 6.77301 13.8821 7.06545L11.2975 9.39465C11.2016 9.48106 11.1536 9.52431 11.1233 9.57693C11.0964 9.62356 11.0795 9.67525 11.0739 9.72872C11.0676 9.78917 11.0809 9.85231 11.1077 9.97868L11.8297 13.3821C11.9203 13.8095 11.9656 14.0231 11.9016 14.1455C11.8459 14.252 11.7437 14.3262 11.6253 14.3463C11.4891 14.3693 11.2999 14.2602 10.9215 14.042L7.90761 12.3037C7.79576 12.2391 7.73984 12.2069 7.68038 12.1943C7.62777 12.1831 7.57338 12.1831 7.52076 12.1943C7.46131 12.2069 7.40539 12.2391 7.29354 12.3037L4.2797 14.042C3.90132 14.2602 3.71213 14.3693 3.57586 14.3463C3.45748 14.3262 3.35528 14.252 3.29963 14.1455C3.23558 14.0231 3.28089 13.8095 3.37153 13.3821L4.09341 9.97868C4.1202 9.85231 4.1336 9.78917 4.12724 9.72872C4.12161 9.67525 4.10481 9.62356 4.07792 9.57693C4.04754 9.52431 3.99958 9.48106 3.90366 9.39465L1.31911 7.06545C0.994632 6.77301 0.83239 6.62683 0.812218 6.4901C0.794704 6.37131 0.833734 6.25117 0.917724 6.16538C1.01442 6.0666 1.23162 6.04368 1.66601 5.99783L5.126 5.63265C5.25442 5.6191 5.31862 5.61232 5.37414 5.58759C5.42327 5.56571 5.46725 5.53375 5.50325 5.49379C5.54392 5.44863 5.57021 5.38966 5.62279 5.27171L7.03928 2.09391Z" stroke="white" strokeWidth="1.17078"/>
                                    </svg>
                                    <p className="text-lg max-[750px]:text-xs">{eventData["Language Level"]}</p>
                                </div>
                            </div>
                        </div>
                        {/* Right Column Info (Spots & Button) */}
                        <div id="rightColumn" className="flex flex-col gap-20">
                            <div id="spotsAvail" className="flex flex-col items-end max-[750px]:hidden">
                                <p className="text-xl font-semibold">{eventData["Spot Limit"] - eventData["Current Attendees"]}/{eventData["Spot Limit"]}</p>
                                <p className="text-lg">spots avail.</p>
                            </div>
                            <Link to={`/events/${eventName}`} className="text-center py-2 mt-auto bg-black rounded-lg w-28 max-[750px]:text-sm max-[750px]:place-self-center">
                                Learn more
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}