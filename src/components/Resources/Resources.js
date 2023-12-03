import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar.js';

// Import Image Icons:
import Brain from '../../imgs/Resources/Brain.png';
import Heart from '../../imgs/Resources/Heart.png';
import Boost from '../../imgs/Resources/Boost.png';
import WorldLanguages from '../../imgs/Resources/WorldLanguages.png';

export default function Resources(props) {

    return (
        <>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className='flex justify-center m-20'>
                <iframe className='rounded-3xl' width="800" height="395" src="https://www.youtube.com/embed/c0MlOuOPjfU"
                    title="Why Students Should Learn a Second Language" frameborder="0"
                    allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>

            <div className='flex flex-col items-center w-screen p-16 text-center bg-indigo-500 h-110'>
                <h2 className='text-lg font-bold text-white md:text-2xl lg:text-4xl'>The Value of Learning a New Language</h2>
                <h3 className='text-white md:text-xl lg:text-2xl'>Why care about learning a new language?</h3>

                <div className="flex flex-col gap-6 my-6 md:flex-row md:space-x-8 lg:space-x-12 md:p-6 lg:p-9">
                    {/* Benefit 1 */}
                    <div className="flex flex-col items-center justify-center">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Boost} alt="boost icon" />
                        <h3 className="mt-2 font-extrabold text-white">Boost Executive Functioning </h3>
                        <p1 className="mt-3 text-white">By learning a new language, you can boost your brain’s executive functioning and improve your ability to <b>focus</b> and accelerate your <b>retention</b> and recall speed</p1>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex flex-col items-center">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Brain} alt="brain icon" />
                        <h3 className="font-extrabold text-white">Improve Brain Health</h3>
                        <p1 className="mt-3 text-white">Acquiring a new language <b>challenges</b> your brain, <b>enhances</b> your memory, and may <b>delay</b> the onset of memory-related health conditions</p1>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex flex-col items-center">
                        <img className="mb-2 md:w-fit md:h-1/2 lg:h-fit" src={Heart} alt="heart icon" />
                        <h3 className="mt-2 font-extrabold text-white">Increase Cultural Awareness</h3>
                        <p1 className="mt-3 text-white">Language learning exposes you to other cultures which can strengthen your <b>empathy</b>, <b>understanding</b>, and <b>respect</b> of different people and perspectives</p1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center md:flex-row ">
                {/* Additional Resources */}
                <div className="flex-1">
                    <div className="m-8 md:ml-14">
                        <h1 className='text-lg font-bold md:text-2xl lg:text-4xl'>Additional Resources</h1>
                        <h3 className='mt-4 text-lg md:text-2xl'>Here are some additional readings and links to learn more about another language</h3>
                    </div>

                    {/* Spanish Resources */}
                    <div className="m-8 md:ml-20">
                        <h2 className="text-2xl font-bold">Spanish</h2>
                        <h3 classname="text-2xl">Get access to additional worksheets, videos, podcasts, and games for Spanish language learners of all levels.</h3>
                        <ul className="text-indigo-400 underline list-disc list-inside">
                            <li className="marker:text-black"><a href="https://www.onlinefreespanish.com/" target="_blank" aria-label="Click for Online Free Spanish Resource">OnlineFreeSpanish</a></li>
                            <li className="marker:text-black"><a href="https://personal.colby.edu/~bknelson/SLC/" target="_blank" aria-label="Click for Spanish Language & Culture  Resource">Spanish Language & Culture</a></li>
                            <li className="marker:text-black"><a href="https://laits.utexas.edu/spe/index/siteindex/#adv" target="_blank" aria-label="Click for Spanish Proficiency Exercises">Spanish Proficiency Exercises</a></li>
                        </ul>
                    </div>

                    {/* French Resources */}
                    <div className="m-8 md:ml-20">
                        <h2 className="text-2xl font-bold">French</h2>
                        <h3>Learn and improve your French skills through additional online lessons, worksheets, flashcards, practice quizzes, and games.</h3>
                        <ul className="text-indigo-400 underline list-disc list-inside">
                            <li className="marker:text-black"><a href="https://www.elearningfrench.com/" target="_blank" aria-label="Click for E-Learning French Resource">ELearningFrench</a></li>
                            <li className="marker:text-black"><a href="https://pollylingu.al/fr/en" target="_blank" aria-label="Click for Polly Lingual Resource">Polly Lingual</a></li>
                            <li className="marker:text-black"><a href="https://www.mondly.com/learn-french-online" target="_blank" aria-label="Click for Mondly by Pearson Resource">Mondly by Pearson</a></li>
                        </ul>

                    </div>

                    {/* ASL Resources */}
                    <div className="m-8 md:ml-20">
                        <h2 className="text-2xl font-bold">ASL</h2>
                        <h3>Get access to a comprehensive dictionary and practice your ASL through interactive videos, tutorials, games, and quizzes.</h3>
                        <ul className="text-indigo-400 underline list-disc list-inside">
                            <li className="marker:text-black"><a href="https://www.lifeprint.com/" target="_blank" aria-label="Click for Life Print Resource">Life Print</a></li>
                            <li className="marker:text-black"><a href="https://www.youtube.com/channel/UC7fVfWv6FL7HeTFeSLz-muQ" target="_blank" aria-label="Click for ASL THAT! Videos">ASL THAT! Videos</a></li>
                            <li className="marker:text-black"><a href="https://www.signingsavvy.com/" target="_blank" aria-label="Click for Signing Savvy Resource">Signing Savvy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="hidden mx-8 mt-8 md:mx-16 md:mt-0 md:hidden lg:block">
                    <img className="object-cover w-full h-72" src={WorldLanguages} alt="People speaking different languages" />
                </div>
            </div>
        </>
    )
}