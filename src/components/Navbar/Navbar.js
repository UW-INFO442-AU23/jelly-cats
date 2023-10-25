import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Login } from '../Login/Login.js';

import logo from '../../imgs/Navbar/Logo.png';
import nav from '../../imgs/Navbar/Nav.png';
import x from '../../imgs/Navbar/X.png';

import './Navbar.css';

export function Navbar(props) {
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const user = props.user;

    return (
        <header>
            <nav>
                <div>
                    {/* Mobile Header */}
                    <ul className="static flex flex-row items-center justify-around h-16 sm:hidden">
                        <li className="basis-1/4 flex-center">
                            <img className="cursor-pointer h-7" src={`${!toggle ? nav : x}`} alt="Navigation" onClick={() => setToggle(!toggle)} />
                        </li>
                        <li className="flex-center">
                            <img className="h-16" src={logo} alt="Logo" />
                        </li>
                        <li className="basis-1/4 flex-center">
                            <Link to="/events" className="px-3 py-1 font-bold text-white bg-indigo-500 rounded md:text-xl">Sign In</Link>
                        </li>
                    </ul>

                    <div className={`sm:hidden ${!toggle ? 'hidden' : 'flex flex-row justify-around'}`}>
                        <ul className="flex flex-col items-center justify-around basis-1/2">
                            <li className="mb-3 rounded hover:bg-indigo-300">
                                <Link to="/" className="font-bold">Home</Link>
                            </li>
                            <li className="mb-3 rounded hover:bg-indigo-300">
                                <Link to="/Events" className="font-bold">Events</Link>
                            </li>
                            <li className="mb-3 rounded hover:bg-indigo-300">
                                <Link to="/Resources" className="font-bold">Resources</Link>
                            </li>
                            <li className="rounded hover:bg-indigo-300">
                                <Link to="/About" className="font-bold">About</Link>
                            </li>
                        </ul>
                        <ul className="basis-1/2"></ul>
                        <ul className="basis-1/4"></ul>
                    </div>
                    {/* Desktop Header */}
                    <ul className="flex-row items-center justify-around hidden h-16 sm:flex">
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
                            {user ? (
                                <li className="flex-center">
                                    {location.pathname === '/Profile' ? 
                                        <Link to="/"><button className="px-8 py-1 font-bold text-white bg-indigo-500 rounded md:text-xl" onClick={props.onSignOut}>Logout</button></Link>
                                    : 
                                        <Link to="/Profile">
                                            <img src={ user.photoURL } className="h-12 rounded-full w-fit" alt="profile"/>
                                        </Link>
                                    }
                                </li>
                            ) : (
                                <li className="basis-1/4 flex-center">
                                    <Login data={props.data} user={user} onSignOut={ props.onSignOut} />
                                </li>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}