import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
                    <ul className="sm:hidden flex flex-row justify-around items-center h-16">
                        <li className="basis-1/4">
                            <img className={`h-7 cursor-pointer ${!toggle ? '' : 'ml-3'}`} src={`${!toggle ? nav : x}`} alt="Navigation" onClick={() => setToggle(!toggle)} />
                        </li>
                        <li className="flex-center">
                            <img className="h-16" src={logo} alt="Logo" />
                        </li>
                        <li className="basis-1/4">
                        </li>
                    </ul>

                    <div className={`sm:hidden ${!toggle ? 'hidden' : 'flex'}`}>
                        <ul className="list-none flex flex-col justify-start items-center ml-4">
                            <li className="rounded hover:bg-indigo-300 mb-3 px-4">
                                <a className="font-bold" href="/">Home</a>
                            </li>
                            <li className="rounded hover:bg-indigo-300 mb-3 px-3">
                                <a className="font-bold" href="/Events">Events</a>
                            </li>
                            <li className="rounded hover:bg-indigo-300 mb-3">
                                <a className="font-bold" href="/Resources">Resources</a>
                            </li>
                            <li className="rounded hover:bg-indigo-300 px-4">
                                <a className="font-bold" href="/About">About</a>
                            </li>
                        </ul>
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
                        <li className="basis-1/4">
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}