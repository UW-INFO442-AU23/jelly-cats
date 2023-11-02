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


            <div className='flex flex-col items-center w-screen p-16 text-center bg-indigo-500 h-110'>
                {/* <div className="my-4"> */}
                    <h2 className='text-lg font-bold text-white md:text-2xl lg:text-4xl'>The Value of Learning a New Language</h2>
                    <h3 className='text-white md:text-2xl lg:text-4xl'>Why care about learning a new language?</h3>
                {/* </div> */}

                <div className="flex flex-col space-x-4 md:flex-row md:space-x-8 lg:space-x-12">
                    {/* Benefit 1 */}
                    <div className="flex flex-col items-center justify-center p-3 md:p-6 lg:p-9">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Boost} alt="boost icon" />
                        <h3 className="mt-2 font-bold text-white">Boost Executive Functioning </h3>
                        <p1 className="mt-3 text-white">By learning a new language, you can boost your brain’s executive functioning and improve your ability to <b>focus</b> and accelerate your <b>retention</b> and recall speed</p1>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex flex-col items-center p-3 md:p-6 lg:p-9">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Brain} alt="brain icon" />
                        <h3 className="font-bold text-white">Improve Brain Health</h3>
                        <p1 className="mt-3 text-white">Acquiring a new language <b>challenges</b> your brain, <b>enhances</b> your memory, and may <b>delay</b> the onset of memory-related health conditions</p1>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex flex-col items-center p-3 md:p-6 lg:p-9">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Heart} alt="heart icon" />
                        <h3 className="mt-2 font-bold text-white">Increase Cultural Awareness</h3>
                        <p1 className="mt-3 text-white">Language learning exposes you to other cultures which can strengthen your <b>empathy</b>, <b>understanding</b>, and <b>respect</b> of different people and perspectives</p1>
                    </div>
                </div>
            </div>
            {/* Additional Resources */}
            <div className="m-16">
                <h1 className='text-lg font-bold md:text-2xl lg:text-4xl'>Additional Resources</h1>
                <h3 className='mt-4 text-lg md:text-2xl'>Here are some additional readings and links to learn more about another language</h3>
            </div>

            {/* Spanish Resources */}
            <div className="m-16">
                <h2 className="font-bold">Spanish</h2> 
                <h3>Get access to additional worksheets, videos, podcasts, and games for Spanish language learners of all levels.</h3> 
                <ul className="text-indigo-400 underline list-disc list-inside">
                    <li><a href="https://www.onlinefreespanish.com/" aria-label="Click for Online Free Spanish Resource">OnlineFreeSpanish</a></li>
                    <li><a href="https://personal.colby.edu/~bknelson/SLC/" aria-label="Click for Spanish Language & Culture  Resource">Spanish Language & Culture</a></li>
                    <li><a href="https://laits.utexas.edu/spe/index/siteindex/#adv" aria-label="Click for Spanish Proficiency Exercises">Spanish Proficiency Exercises</a></li>
                </ul>
            </div>

            {/* French Resources */}
            <div className="m-16">
                <h2 className="font-bold">French</h2>
                <h3>Learn and improve your French skills through additional online lessons, worksheets, flashcards, practice quizzes, and games.</h3>
                <ul className="text-indigo-400 underline list-disc list-inside">
                    <li><a href="https://www.elearningfrench.com/" aria-label="Click for E-Learning French Resource">ELearningFrench</a></li>
                    <li><a href="https://pollylingu.al/fr/en" aria-label="Click for Polly Lingual Resource">Polly Lingual</a></li>
                    <li><a href="https://www.mondly.com/learn-french-online" aria-label="Click for Mondly by Pearson Resource">Mondly by Pearson</a></li>
                </ul>

            </div>

            {/* ASL Resources */}
            <div className="m-16">
                <h2 className="font-bold">ASL</h2>
                <h3>Get access to a comprehensive dictionary and practice your ASL through interactive videos, tutorials, games, and quizzes.</h3>
                <ul className= "text-indigo-400 underline list-disc list-inside">
                    <li><a href="https://www.lifeprint.com/" aria-label="Click for Life Print Resource">Life Print</a></li>
                    <li><a href="https://aslpro.cc/" aria-label="Click for ASL Pro Resource">ASL Pro</a></li>
                    <li><a href="https://www.signingsavvy.com/" aria-label="Click for Signing Savvy Resource">Signing Savvy</a></li>
                </ul>
            </div>
        </div>
    )
}

