import React, { useEffect, useState } from 'react';
import logo from '../../imgs/Logo.png';
import './Navbar.css';

export function Navbar(props) {

    return (
        <header class="bg-white">
            <nav class="flex justify-between items-center w-[92%]  mx-auto">
                <div>
                    <img class="w-16 cursor-pointer" src={logo} alt="Logo"/>
                </div>
                <div
                    class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                    <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12">
                        <li>
                            <a class="hover:text-gray-500" href="/">Home</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="/Events">Events</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="/Resources">Resources</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="/About">About</a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-6">
                    <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                    <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
                </div>
            </nav>
        </header>
    )
}