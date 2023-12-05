import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar.js';

import home from '../../imgs/Home/Home.png';
import asl from '../../imgs/Home/ASL.png';
import spanish from '../../imgs/Home/Spanish.png';
import french from '../../imgs/Home/French.png';

export default function Home(props) {
    return (
        <>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className="flex flex-col justify-center w-screen gap-10 mt-12">
                {/* Introduction */}
                <div className="flex items-center justify-center mx-8 my-10 md:flex-row md:mx-20 2xl:mx-36">
                    <div className="flex flex-col basis-3/4 md:basis-1/2">
                        <p className="font-bold md:text-2xl lg:text-4xl">Accessible and collaborative language-learning</p>
                        <p className="mt-8 text-sm md:text-lg lg:text-2xl">Kinguistics strives to provide accessible collaborative language-learning opportunities for high school students in King County, WA.</p>
                    </div>
                    <img className="w-2/5 h-fill" src={home} alt="Home" />
                </div>
                {/* Top Events List */}
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-lg font-bold md:text-2xl lg:text-4xl">Top Events</p>
                        <p className="py-2 md:text-xl lg:text-2xl md:pt-5">Here’s a selection of our top upcoming events</p>
                    </div>
                    <div className="flex flex-col items-center w-4/5 sm:justify-between sm:flex-row md:my-3 lg:my-10">
                        <div className="flex flex-col items-center justify-center">
                            <img className="w-full mb-2 h-fit 2xl:w-96" src={asl} alt="ASL" />
                            <p className="text-lg font-bold lg:text-2xl">ASL Market</p>
                            <p className="pb-5 md:pb-0 lg:text-xl">ASL in Aisles: Sign your way to flavors!</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img className="mb-2 w-fit h-fit 2xl:w-96" src={spanish} alt="Spanish" />
                            <p className="text-lg font-bold lg:text-2xl">Spanish at the Beach</p>
                            <p className="pb-5 md:pb-0 lg:text-xl">Spanish by the shore: Spice up your getaway!</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img className="w-full mb-2 h-fit 2xl:w-96" src={french} alt="French" />
                            <p className="text-lg font-bold lg:text-2xl">French Bakery</p>
                            <p className="lg:text-xl">Fluent in French: Boss in Bakeries! </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <Link to="/Events" className="px-5 py-1 font-bold text-white bg-indigo-500 rounded-lg md:text-xl md:py-3 md:px-8">View all Events</Link>
                    </div>
                </div>
                {/* How to use Section */}
                <div className="flex flex-col mx-10 md:mx-32 2xl:mx-60 lg:my-10">
                    <p className="text-2xl font-bold lg:text-4xl">How to use Kinguistics</p>
                    <p className="pt-5 lg:text-2xl">
                        Are you a King County, WA high school student looking for additional ways to help you learn and practice a foreign language for class?
                        Here’s how to get started! Follow the steps below to get access to more language learning resources and events:
                    </p>

                    <p className="mt-2 mb-3 lg:text-lg md:mt-3 lg:mt-3">1. Create a Kinguistics profile through your Google Account by clicking on the "Login" button.  </p>
                    <p className="mt-2 mb-3 lg:text-lg md:mt-3 lg:mt-3">2. Review the <Link to="/Resources" className="underline">Resources</Link> page for more educational tools to support your learning</p>
                    <p className="mt-2 mb-3 lg:text-lg md:mt-3 lg:mt-3">3. Explore the <Link to="/Events" className="underline">Events</Link> page and sign up for upcoming in-person or online events where you can practice your skills with other students.</p>
                    <p className="mt-2 mb-3 lg:text-lg md:mt-3 lg:mt-3">4. Explore the Flashcards associated with each event for more practice!</p>

                </div>
            </div>
        </>
    );
}

