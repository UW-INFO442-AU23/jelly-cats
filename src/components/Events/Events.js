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
                    <p className="text-lg md:text-2xl lg:text-4xl font-bold">Upcoming Events</p>
                    <p className="mt-8 md:text-lg lg:text-2xl">Find an upcoming language-learning event that suits your learning needs! Use filters to refine your search.</p>
                </div>
                {/* Filter */}
                <div className="flex flex-row justify-between items-center mt-8">
                    <div className="flex">
                        <div className="flex flex-row items-center justify-between border-4 border-indigo-500 rounded-full py-2 px-4 mr-7">
                            <p className="mr-10">Location</p>
                            <img src={ arrow } className="h-fit"/>
                        </div>
                        <div className="flex flex-row items-center justify-between border-4 border-indigo-500 rounded-full py-2 px-4 mr-7">
                            <p className="mr-10">Language Level</p>
                            <img src={ arrow } className="h-fit"/>
                        </div>
                        <div className="flex flex-row items-center justify-between border-4 border-indigo-500 rounded-full py-2 px-4 mr-7">
                            <p className="mr-10">Location</p>
                            <img src={ arrow } className="h-fit"/>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between border-4 border-indigo-500 rounded-full py-2 px-4">
                            <p className="mr-10">Sort by date</p>
                            <img src={ arrow } className="h-fit"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
