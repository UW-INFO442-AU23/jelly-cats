import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../imgs/Logo.png';
import './Navbar.css';

export function Navbar(props) {
    const location = useLocation();

    return (
        <header>
            <nav>
                <div className="">
                    <ul className="flex flex-row justify-around items-center h-16">
                        <li className="basis-1/4 flex-center">
                            <img className="w-16" src={logo} alt="Logo"/>
                            <a className="font-bold text-3xl">Kinguistics</a>
                        </li>
                        <li>
                            <a className={`font-bold ${location.pathname === '/' ? 'border-b-4 border-indigo-500' : ''}`} href="/">Home</a>
                        </li>
                        <li>
                            <a className={`font-bold ${location.pathname === '/Events' ? 'border-b-4 border-indigo-500' : ''}`} href="/Events">Events</a>
                        </li>
                        <li>
                            <a className={`font-bold ${location.pathname === '/Resources' ? 'border-b-4 border-indigo-500' : ''}`} href="/Resources">Resources</a>
                        </li>
                        <li>
                            <a className={`font-bold ${location.pathname === '/About' ? 'border-b-4 border-indigo-500' : ''}`} href="/About">About</a>
                        </li>
                        <li className="basis-1/4">
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
