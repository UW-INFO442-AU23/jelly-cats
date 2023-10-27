import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar.js';

export default function Resources(props) {

    return (
        <div>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className='flex justify-center m-20'>
                <iframe width="800" height="395" src="https://www.youtube.com/embed/c0MlOuOPjfU"
                    title="Why Students Should Learn a Second Language" frameborder="0"
                    allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>

            <div className='flex justify-center w-screen p-16 bg-indigo-500 h-96'>
                <p className='text-lg font-bold text-white md:text-2xl lg:text-4xl'>The Value of Learning a New Language</p>
            </div>
        </div>
    )
}