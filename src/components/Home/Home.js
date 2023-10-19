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
      <div className="flex flex-col justify-center h-auto">
        <div className="flex flex-col md:flex-row basis-full md:basis-1/2 my-10 mx-32 flex-center">
          <div className="flex flex-col basis-1/2">
            <p className="md:text-4xl font-bold">Accessible and collaborative language-learning</p>
            <p className="mt-8 text-xs md:text-2xl">Kinguistics strives to provide accessible collaborative language-learning opportunities for high school students in King County, WA. </p>
          </div>
          <img className="h-fit" src={home} alt="Home" />
        </div>
        <div className="flex flex-col flex-center my-10">
          <p className="md:text-4xl font-bold">Top Events</p>
          <p className="md:text-2xl pt-5">Here’s a selection of our top upcoming events</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around mx-72">
          <div className="flex flex-col justify-center flex-center">
            <img className="h-fit mb-2" src={asl} alt="ASL"/>
            <p className="font-bold md:text-2xl py-1">ASL Market</p>
            <p className="md:text-xl">ASL in Aisles: Sign your way to flavors!</p>
          </div>
          <div className="flex flex-col justify-center flex-center">
            <img className="h-fit mb-2" src={spanish} alt="ASL"/>
            <p className="font-bold md:text-2xl py-1">Spanish at the Beach</p>
            <p className="md:text-xl">Spanish by the shore: Spice up your getaway!</p>
          </div>
          <div className="flex flex-col justify-center flex-center">
            <img className="h-fit mb-2" src={french} alt="ASL"/>
            <p className="font-bold md:text-2xl py-1">French Bakery</p>
            <p className="md:text-xl">Fluent in French: Boss in Bakeries! </p>
          </div>
        </div>
        <div className="flex flex-row justify-center my-12">
          <Link to="/events" className="bg-indigo-500 md:text-xl text-white font-bold rounded py-3 px-8">View all Events</Link>
        </div>
        <div className="flex flex-col mx-60 my-10">
          <p className="md:text-4xl font-bold">How to use Kinguistics</p>
          <p className="md:text-2xl pt-5">
            Are you a King County, WA high school student looking for additional ways to help you learn and practice a foreign language for class? 
            Here’s how to get started! Follow the steps below to get access to more language learning resources and events:
          </p>
          <p className="md:text-2xl pt-10 pb-3">1. Review the <Link to="/resources" className="underline">Resources</Link> page for more educational tools to support your learning</p>
          <p className="md:text-2xl">2. Explore the <Link to="/events" className="underline">Events</Link> page and sign up for upcoming in-person or online events where you can practice your skills with other students.</p>
        </div>
      </div>
    </div>
  );
}

