import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar.js';

export default function Resources(props) {

    return (
        <div>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className='flex justify-center m-20 rounded'>
                <iframe width="800" height="395" src="https://www.youtube.com/embed/c0MlOuOPjfU"
                    title="Why Students Should Learn a Second Language" frameborder="0"
                    allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>

            <div className='w-screen h-96 bg-indigo-500 flex justify-center p-16'>
                <p className='text-lg font-bold md:text-2xl lg:text-4xl text-white'>The Value of Learning a New Language</p>
            </div>
        </div>
    )
}