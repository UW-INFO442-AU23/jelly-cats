import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar.js';

// Import Image Icons:
import Brain from '../../imgs/Resources/Brain.png';
import Heart from '../../imgs/Resources/Heart.png';
import Boost from '../../imgs/Resources/Boost.png';

export default function Resources(props) {

    return (
        <div>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className='flex justify-center m-20'>
                <iframe className='rounded-3xl' width="800" height="395" src="https://www.youtube.com/embed/c0MlOuOPjfU"
                    title="Why Students Should Learn a Second Language" frameborder="0"
                    allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>


            <div className='flex flex-col items-center w-screen p-16 bg-indigo-500 h-110'>
                {/* <div className="my-4"> */}
                    <h2 className='text-lg font-bold text-white md:text-2xl lg:text-4xl'>The Value of Learning a New Language</h2>
                    <h3 className='text-base text-white md:text-2xl lg:text-4xl'>Why care about learning a new language?</h3>
                {/* </div> */}

                <div className="flex space-x-4 md:space-x-8 lg:space-x-12">
                    {/* Benefit 1 */}
                    <div className="flex flex-col items-center p-3 md:p-6 lg:p-9">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Boost} alt="boost icon" />
                        <h3 className="text-base font-bold text-white mt-2">Boost Executive Functioning </h3>
                        <p1 className="text-base text-center text-white mt-3">By learning a new language, you can boost your brain’s executive functioning and improve your ability to <b>focus</b> and accelerate your <b>retention</b> and recall speed</p1>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex flex-col items-center p-3 md:p-6 lg:p-9">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Brain} alt="brain icon" />
                        <h3 className="text-base font-bold text-white">Improve Brain Health</h3>
                        <p1 className="text-base text-center text-white mt-3">Acquiring a new language <b>challenges</b> your brain, <b>enhances</b> your memory, and may <b>delay</b> the onset of memory-related health conditions</p1>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex flex-col items-center p-3 md:p-6 lg:p-9">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Heart} alt="heart icon" />
                        <h3 className="text-base font-bold text-white mt-2">Increase Cultural Awareness</h3>
                        <p1 className="text-base text-center text-white mt-3">Language learning exposes you to other cultures which can strengthen your <b>empathy</b>, <b>understanding</b>, and <b>respect</b> of different people and perspectives</p1>
                    </div>
                </div>
            </div>
        </div>
    )
}

