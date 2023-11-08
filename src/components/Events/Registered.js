import React from 'react';
import { Navbar } from '../Navbar/Navbar.js';
import { Link } from 'react-router-dom';
import registered from '../../imgs/Events/Registered.png';

export default function Registered(props) {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center h-full gap-6 mt-32 text-center">
                <img src={registered} alt="registration complete"/>
                <h1 className="text-3xl font-bold">You have successfully <span className="text-indigo-500">REGISTERED</span> for this event!</h1>
                <p className="text-2xl">Confirmation will be sent to your email.</p>
                <Link to="/events">
                    <button className="px-2 py-1 mx-2 text-white bg-indigo-500 rounded-md md:px-4 md:py-2 md:mx-4 md:text-sm hover:bg-neutral-800">
                        Back To Events
                    </button>
                </Link>
            </div>
        </div>
    );
}