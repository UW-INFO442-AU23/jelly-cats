import React from "react";
import { Navbar } from "../Navbar/Navbar.js";

import justin from '../../imgs/About/Justin.png';
import matthew from '../../imgs/About/Matthew.png';
import sarah from '../../imgs/About/Sarah.png';
import scott from '../../imgs/About/Scott.png';
import vannary from '../../imgs/About/Vannary.png';

export default function About(props) {
    return (
        <div>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className="flex flex-col justify-center mt-12">
                {/* Team Introduction & Goals */}
                <p className="mt-10 text-lg font-bold md:text-4xl mx-14 md:mx-32 md:mt-20"> Meet the team behind Kinguistics</p>
                <p className="mt-3 md:text-xl mx-14 md:mx-32 md:mt-6">
                    To address the educational disparities faced by underprivileged students in King County schools’
                    foreign language programs, our team aims to support high school students by offering free resources
                    and opportunities for students to further their learning and collaborate with peers outside of school.
                </p>
                {/* Team Portraits + Role */}
                <div className="flex flex-col flex-wrap justify-around mx-20 mt-5 md:flex-row md:my-6">
                    <div className="flex flex-col items-center justify-center">
                        <img className="md:w-60" src={sarah} alt="Portrait"/>
                        <p className="mt-3 font-bold md:mt-2 md:text-2xl">Sarah Thomas<br/></p>
                        <p className="mb-3 md:text-xl">UX/UI Designer + PM</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="md:w-60" src={vannary} alt="Portrait"/>
                        <p className="mt-3 font-bold md:mt-2 md:text-2xl">Vannary Sou<br/></p>
                        <p className="mb-3 md:text-xl">User Researcher</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="md:w-60" src={justin} alt="Portrait"/>
                        <p className="mt-3 font-bold md:mt-2 md:text-2xl">Justin Sukomol<br/></p>
                        <p className="mb-3 md:text-xl">UX/UI Designer + PM</p>
                    </div>
                </div>
                <div className="flex flex-col flex-wrap justify-around md:flex-row md:mx-72">
                    <div className="flex flex-col items-center justify-center">
                        <img className="md:w-60" src={scott} alt="Portrait"/>
                        <p className="mt-3 font-bold md:mt-2 md:text-2xl">Scott Nguyen<br/></p>
                        <p className="mb-3 md:mb-0 md:text-xl">Developer</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="md:w-60" src={matthew} alt="Portrait"/>
                        <p className="mt-3 font-bold md:mt-2 md:text-2xl">Matthew Bacarro<br/></p>
                        <p className="mb-3 md:mb-0 md:text-xl">Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
