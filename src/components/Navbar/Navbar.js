import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Login } from './Login.js';

import logo from '../../imgs/Navbar/Logo.png';
import nav from '../../imgs/Navbar/NavBarRounded.png';
import x from '../../imgs/Navbar/NewX.png';

export function Navbar(props) {
    const location = useLocation();
    const [toggle, setToggle] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const user = props.user;

    return (
        <header>
            <nav className="z-50">
                <div>
                    {/* Mobile Header */}
                    <ul className="fixed top-0 flex flex-row items-center justify-around w-full h-16 bg-white sm:hidden">
                        <li className="basis-1/4 flex-center">
                            <div className="relative group" onClick={() => setToggle(!toggle)}>
                                <img className="mr-2 cursor-pointer h-7" src={`${!toggle ? nav : x}`} alt="Navigation" onClick={() => setToggle(!toggle)} />
                                <div className={`text-center absolute left-1/2 transform -translate-x-1/2 mt-2 w-28 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-indigo-500 ${toggle ? 'block' : 'hidden'}`}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <Link to="/" className="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/events" className="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Events</Link>
                                        </li>
                                        <li>
                                            <Link to="/resources" className="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Resources</Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="flex-center">
                            <img className="h-16" src={logo} alt="Logo" />
                        </li>
                        <li className="basis-1/4 flex-center">
                            {user ? (
                                <div className="relative group" onClick={() => setProfileDropdown(!profileDropdown)}>
                                    <img src={user.photoURL} className="h-12 rounded-full cursor-pointer" alt="profile" />
                                    <div className={`absolute text-center left-1/2 transform -translate-x-1/2 mt-2 w-28 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-indigo-500 ${profileDropdown ? 'block' : 'hidden'}`}>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <Link to="/profile" className="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                            </li>
                                            <li>
                                                <a href="/" className="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={props.onSignOut}>Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <Login data={props.data} user={user} onSignOut={props.onSignOut} />
                            )}
                        </li>
                    </ul>

                    {/* Desktop Header */}
                    <ul className="fixed top-0 flex-row items-center justify-around hidden w-full h-16 bg-white sm:flex">
                       {/* <li className="basis-1/4 flex-center">
                            {/*Changing navbar logo icon to "Kinguistics"
                            <Link to="/home" className={`font-black text-2xl ${location.pathname === '/home' ? '' : ''}`} >Kinguistics</Link>
                        </li> */}
                        <li>
                            <Link to="/" className={`font-bold ${location.pathname === '/Home' ? 'border-b-4 border-indigo-500' : ''}`} >Home</Link>
                        </li>
                        <li>
                            <Link to="/events" className={`font-bold ${location.pathname === '/events' ? 'border-b-4 border-indigo-500' : ''}`} >Events</Link>
                        </li>
                        <li>
                            <Link to="/resources" className={`font-bold ${location.pathname === '/resources' ? 'border-b-4 border-indigo-500' : ''}`} >Resources</Link>
                        </li>
                        <li>
                            <Link to="/about" className={`font-bold ${location.pathname === '/about' ? 'border-b-4 border-indigo-500' : ''}`} >About</Link>
                        </li>
                        <li className="basis-1/4 flex-center">
                            {user ? (
                                <div className="relative group" onClick={() => setProfileDropdown(!profileDropdown)}>
                                    <img src={user.photoURL} className="h-12 rounded-full cursor-pointer" alt="profile" />
                                    <div className={`absolute text-center left-1/2 transform -translate-x-1/2 mt-2 w-28 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-indigo-500 ${profileDropdown ? 'block' : 'hidden'}`}>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <Link to="/profile" className="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                            </li>
                                            <li>
                                                <a href="/" className="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={props.onSignOut}>Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <li className="basis-1/4 flex-center">
                                    <Login data={props.data} user={user} onSignOut={props.onSignOut} />
                                </li>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}