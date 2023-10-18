import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar.js';

export default function About(props) {

    return (
        <div>
            <Navbar/>
            <div className="flex flex-col justify-center">
                <a className="font-bold text-2xl py-20 px-20">Meet the team behind Kinguistics</a>
            </div>
        </div>
    )
}