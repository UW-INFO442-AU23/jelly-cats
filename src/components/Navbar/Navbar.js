import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Login } from '../Login/Login.js';
import logo from '../../imgs/Navbar/Logo.png';
import nav from '../../imgs/Navbar/Nav.png';
import x from '../../imgs/Navbar/X.png';
import './Navbar.css';

export function Navbar(props) {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [toggle, setToggle] = useState(false);

    const auth = getAuth();

    useEffect(() => {
        // Check if user is logged in
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error(error);
            });
    };

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
                                    <p className="mr-10 font-bold">{user.displayName}</p>
                                    <button className="px-8 py-1 font-bold text-white bg-indigo-500 rounded md:text-xl" onClick={handleSignOut}>Sign Out</button>
                                </li>
                            ) : (
                                <li className="basis-1/4 flex-center">
                                    <Login />
                                </li>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}