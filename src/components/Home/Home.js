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
            <a className="md:text-4xl font-bold">Accessible and collaborative language-learning</a>
            <a className="mt-8 text-xs md:text-2xl">Kinguistics strives to provide accessible collaborative language-learning opportunities for high school students in King County, WA. </a>
          </div>
          <img className="h-fit" src={home} alt="Home" />
        </div>
        <div className="flex flex-col flex-center my-10">
          <a className="md:text-4xl font-bold">Top Events</a>
          <a className="text-2xl pt-5">Here’s a selection of our top upcoming events</a>
        </div>
        <div className="flex flex-row justify-around mx-72">
          <div className="flex flex-col justify-center flex-center">
            <img className="h-fit" src={asl} alt="ASL"/>
            <a className="font-bold text-2xl py-1">ASL Market</a>
            <a className="text-xl">ASL in Aisles: Sign your way to flavors!</a>
          </div>
          <div className="flex flex-col justify-center flex-center">
            <img className="h-fit" src={spanish} alt="ASL"/>
            <a className="font-bold text-2xl py-1">Spanish at the Beach</a>
            <a className="text-xl">Spanish by the shore: Spice up your getaway!</a>
          </div>
          <div className="flex flex-col justify-center flex-center">
            <img className="h-fit" src={french} alt="ASL"/>
            <a className="font-bold text-2xl py-1">French Bakery</a>
            <a className="text-xl">Fluent in French: Boss in Bakeries! </a>
          </div>
        </div>
        <div className="flex flex-row justify-center my-12">
          <Link to="/events" className="bg-indigo-500 text-xl text-white font-bold rounded py-3 px-8">View all Events</Link>
        </div>
        <div className="flex flex-col mx-60 my-10">
          <a className="md:text-4xl font-bold">How to use Kinguistics</a>
          <a className="text-2xl pt-5">
            Are you a King County, WA high school student looking for additional ways to help you learn and practice a foreign language for class? 
            Here’s how to get started! Follow the steps below to get access to more language learning resources and events:
          </a>
          <a className="text-2xl pt-10 pb-3">1. Review the <Link to="/resources" className="underline">Resources</Link> page for more educational tools to support your learning</a>
          <a className="text-2xl">2. Explore the <Link to="/events" className="underline">Events</Link> page and sign up for upcoming in-person or online events where you can practice your skills with other students.</a>
        </div>
      </div>
    </div>
  );
}

