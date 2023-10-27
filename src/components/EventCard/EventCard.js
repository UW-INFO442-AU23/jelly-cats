import React, { useEffect, useState } from "react";

export default function EventCard({eventName, eventData}) {

    
    return (
        <div className="flex justify-center">
            <div className="flex w-[590px] bg-indigo-500 h-[225px] justify-left p-5 gap-6">
                    <div id="imgPlaceholder" className="bg-gray-500 w-44 h-44 place-self-center"></div>
                    <div id="eventInfo" className="flex gap-10 ml-auto text-white">
                        <div id="leftColumn" className="flex gap-2.5 flex-col">
                            <h1 className="text-xl font-bold">{eventName}</h1>
                            <div id="info" className="flex flex-col gap-2">
                                <div id="date" className="flex gap-2">
                                    <div id="iconPlaceholder" className="w-[15px] h-[15px] bg-slate-500 my-auto"></div>
                                    <p className="text-lg">{eventData.Date}</p>
                                </div>
                                <div id="time" className="flex gap-2">
                                    <div id="iconPlaceholder" className="w-[15px] h-[15px] bg-slate-500 my-auto"></div>
                                    <p className="text-lg">{eventData.Time}</p>
                                </div>
                                <div id="location" className="flex gap-2">
                                    <div id="iconPlaceholder" className="w-[15px] h-[15px] bg-slate-500 my-auto"></div>
                                    <p className="text-lg">{eventData.Location}</p>
                                </div>
                                <div id="difficulty" className="flex gap-2">
                                    <div id="iconPlaceholder" className="w-[15px] h-[15px] bg-slate-500 my-auto"></div>
                                    <p className="text-lg">{eventData["Language Level"]}</p>
                                </div>
                            </div>
                        </div>
                        <div id="rightColumn" className="flex flex-col gap-20">
                            <div id="spotsAvail" className="flex flex-col items-end">
                                <p className="text-xl font-semibold">{eventData["Current Attendees"]}/{eventData["Spot Limit"]}</p>
                                <p className="text-lg">spots avail.</p>
                            </div>
                            <button className="h-10 mt-auto bg-black rounded-lg w-28">
                                Learn more
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}