import React, { useEffect, useState } from "react";

export default function EventCard(props) {

    return (
        <div className="flex w-[600px] bg-indigo-500 h-[225px] justify-left p-5 gap-6">
                <div id="imgPlaceholder" className="bg-gray-500 w-44 h-44 place-self-center"></div>
                <div id="eventInfo" className="text-white flex gap-9">
                    <div id="leftColumn" className="flex gap-2.5 flex-col">
                        <h1 className="text-xl font-bold">ASL Market</h1>
                        <div id="info" className="flex flex-col gap-2">
                            <div id="date" className="flex gap-2">
                                <div id="iconPlaceholder" className="w-[15px] h-[15px] bg-slate-500 my-auto"></div>
                                <p className="text-lg">January 6th, 2024</p>
                            </div>
                            <div id="time" className="flex gap-2">
                                <div id="iconPlaceholder" className="w-[15px] h-[15px] bg-slate-500 my-auto"></div>
                                <p className="text-lg">5pm - 6pm PST</p>
                            </div>
                            <div id="location" className="flex gap-2">
                                <div id="iconPlaceholder" className="w-[15px] h-[15px] bg-slate-500 my-auto"></div>
                                <p className="text-lg">Virtual</p>
                            </div>
                            <div id="difficulty" className="flex gap-2">
                                <div id="iconPlaceholder" className="w-[15px] h-[15px] bg-slate-500 my-auto"></div>
                                <p className="text-lg">Intermediate</p>
                            </div>
                        </div>
                    </div>
                    <div id="rightColumn" className="flex flex-col gap-20">
                        <div id="spotsAvail" className="flex flex-col items-end">
                            <p className="text-lg font-medium">23/24</p>
                            <p className="text-base">spots avail.</p>
                        </div>
                        <button className="bg-black w-36 h-10 rounded-lg mt-auto">
                            Learn more 
                        </button>
                    </div>
                </div>
        </div>
    )
}

// IGNORE THIS USING FOR LATER
// {recipes.map(recipe => (
//     <GridSuggestion key={recipe.id} recipe={recipe.title} img={recipe.overviewImg} />
// ))}