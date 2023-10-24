import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar.js';
import home from '../../imgs/Home/Home.png';
import asl from '../../imgs/Home/ASL.png';
import spanish from '../../imgs/Home/Spanish.png';
import french from '../../imgs/Home/French.png';
import './Home.css';

export default function Home(props) {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col justify-center">
            {/* Introduction */}
            <div className="flex items-center justify-center my-10 md:flex-row mx-14 md:mx-20 lg:mx-36">
            <div className="flex flex-col basis-3/4 md:basis-1/2">
                <p className="text-lg font-bold md:text-2xl lg:text-4xl">Accessible and collaborative language-learning</p>
                <p className="mt-8 md:text-lg lg:text-2xl">Kinguistics strives to provide accessible collaborative language-learning opportunities for high school students in King County, WA.</p>
            </div>
            <img className="w-2/5 h-fill" src={home} alt="Home" />
            {/* Top Events List */}
            </div>
                <div className="flex flex-col items-center md:my-3 lg:my-10">
                <p className="text-lg font-bold md:text-2xl lg:text-4xl">Top Events</p>
                <p className="py-2 md:text-xl lg:text-2xl md:pt-5">Here’s a selection of our top upcoming events</p>
            </div>
            <div className="flex flex-col justify-around pt-5 text-center md:flex-row md:pt-0 2xl:mx-72">
                <div className="flex flex-col items-center justify-center">
                    <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={asl} alt="ASL"/>
                    <p className="text-lg font-bold lg:text-2xl">ASL Market</p>
                    <p className="pb-5 md:pb-0 lg:text-xl">ASL in Aisles: Sign your way to flavors!</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={spanish} alt="ASL"/>
                    <p className="text-lg font-bold lg:text-2xl">Spanish at the Beach</p>
                    <p className="pb-5 md:pb-0 lg:text-xl">Spanish by the shore: Spice up your getaway!</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={french} alt="ASL"/>
                    <p className="text-lg font-bold lg:text-2xl">French Bakery</p>
                    <p className="lg:text-xl">Fluent in French: Boss in Bakeries! </p>
                </div>
            </div>
            {/* View Events Button */}
            <div className="flex flex-row justify-center my-8 lg:my-12">
                <Link to="/events" className="px-5 py-1 font-bold text-white bg-indigo-500 rounded md:text-xl md:py-3 md:px-8">View all Events</Link>
            </div>
            {/* How to use Section */}
            <div className="flex flex-col mx-14 md:mx-28 lg:mx-60 lg:my-10">
                <p className="text-2xl font-bold lg:text-4xl">How to use Kinguistics</p>
                <p className="pt-5 lg:text-2xl">
                    Are you a King County, WA high school student looking for additional ways to help you learn and practice a foreign language for class? 
                    Here’s how to get started! Follow the steps below to get access to more language learning resources and events:
                </p>
                <p className="mt-5 mb-3 lg:text-2xl md:mt-7 lg:mt-10">1. Review the <Link to="/resources" className="underline">Resources</Link> page for more educational tools to support your learning</p>
                <p className="lg:text-2xl">2. Explore the <Link to="/events" className="underline">Events</Link> page and sign up for upcoming in-person or online events where you can practice your skills with other students.</p>
            </div>
        </div>
    </div>
  );
}

