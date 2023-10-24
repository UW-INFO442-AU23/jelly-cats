import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar.js";
import arrow from '../../imgs/Events/Arrow.png';

export default function Events(props) {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center mx-14 md:mx-20 lg:mx-36">
                {/* Introduction */}
                <div className="mt-10 md:mt-20">
                    <p className="text-lg font-bold md:text-2xl lg:text-4xl">Upcoming Events</p>
                    <p className="mt-8 md:text-lg lg:text-2xl">Find an upcoming language-learning event that suits your learning needs! Use filters to refine your search.</p>
                </div>
                {/* Filter */}
                <div className="flex flex-row items-center justify-between mt-8">
                    <div className="flex">
                        <div className="flex flex-row items-center justify-between px-4 py-2 border-4 border-indigo-500 rounded-full cursor-pointer mr-7">
                            <p className="mr-10">Location</p>
                            <img src={ arrow } className="h-fit" alt="Location filter dropdown"/>
                        </div>
                        <div className="flex flex-row items-center justify-between px-4 py-2 border-4 border-indigo-500 rounded-full cursor-pointer mr-7">
                            <p className="mr-10">Language Level</p>
                            <img src={ arrow } className="h-fit" alt="Language Level filter dropdown"/>
                        </div>
                        <div className="flex flex-row items-center justify-between px-4 py-2 border-4 border-indigo-500 rounded-full cursor-pointer mr-7">
                            <p className="mr-10">Location</p>
                            <img src={ arrow } className="h-fit" alt="Location filter dropdown"/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between px-4 py-2 border-4 border-indigo-500 rounded-full cursor-pointer">
                            <p className="mr-10">Sort by date</p>
                            <img src={ arrow } className="h-fit" alt="Sort by date filter dropdown"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
