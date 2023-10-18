import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../imgs/Logo.png';
import './Navbar.css';

export function Navbar(props) {
    const location = useLocation();

    return (
        <header>
            <nav>
                <div class="flex-grow">
                    <ul class="flex flex-row justify-around items-center text-lg">
                        <li>
                            <img class="w-16" src={logo} alt="Logo"/>
                        </li>
                        <li>
                            <a class={`font-bold ${location.pathname === '/' ? 'border-b-4 border-indigo-500' : ''}`} href="/">Home</a>
                        </li>
                        <li>
                            <a class={`font-bold ${location.pathname === '/Events' ? 'border-b-4 border-indigo-500' : ''}`} href="/Events">Events</a>
                        </li>
                        <li>
                            <a class={`font-bold ${location.pathname === '/Resources' ? 'border-b-4 border-indigo-500' : ''}`} href="/Resources">Resources</a>
                        </li>
                        <li>
                            <a class={`font-bold ${location.pathname === '/About' ? 'border-b-4 border-indigo-500' : ''}`} href="/About">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}