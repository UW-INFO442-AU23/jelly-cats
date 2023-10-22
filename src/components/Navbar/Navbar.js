import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../imgs/Navbar/Logo.png';
import nav from '../../imgs/Navbar/Nav.png';
import x from '../../imgs/Navbar/X.png';
import './Navbar.css';

export function Navbar(props) {
    const location = useLocation();
    const [toggle, setToggle] = useState(false);

    return (
        <header>
            <nav>
                <div>
                    {/* Mobile Header */}
                    <ul className="sm:hidden static flex flex-row justify-around items-center h-16">
                        <li className="basis-1/4 flex-center">
                            <img className="h-7 cursor-pointer" src={`${!toggle ? nav : x}`} alt="Navigation" onClick={() => setToggle(!toggle)} />
                        </li>
                        <li className="flex-center">
                            <img className="h-16" src={logo} alt="Logo" />
                        </li>
                        <li className="basis-1/4 flex-center">
                            <Link to="/events" className="bg-indigo-500 md:text-xl text-white font-bold rounded px-3 py-1">Sign In</Link>
                        </li>
                    </ul>

                    <div className={`sm:hidden ${!toggle ? 'hidden' : 'flex flex-row justify-around'}`}>
                        <ul className="flex flex-col justify-around items-center basis-1/2">
                            <li className="rounded hover:bg-indigo-300 mb-3">
                                <a className="font-bold" href="/">Home</a>
                            </li>
                            <li className="rounded hover:bg-indigo-300 mb-3">
                                <a className="font-bold" href="/Events">Events</a>
                            </li>
                            <li className="rounded hover:bg-indigo-300 mb-3">
                                <a className="font-bold" href="/Resources">Resources</a>
                            </li>
                            <li className="rounded hover:bg-indigo-300">
                                <a className="font-bold" href="/About">About</a>
                            </li>
                        </ul>
                        <ul className="basis-1/2"></ul>
                        <ul className="basis-1/4"></ul>
                    </div>
                    {/* Desktop Header */}
                    <ul className="hidden sm:flex flex-row justify-around items-center h-16">
                        <li className="basis-1/4 flex-center">
                            <img className="h-16" src={logo} alt="Logo" />
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
                        <li className="basis-1/4 flex-center">
                            <Link to="/events" className="bg-indigo-500 md:text-xl text-white font-bold rounded px-6 py-1">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}