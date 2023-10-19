import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar.js";
import justin from '../../imgs/Justin.png';
import matthew from '../../imgs/Matthew.png';
import sarah from '../../imgs/Sarah.png';
import scott from '../../imgs/Scott.png';
import vannary from '../../imgs/Vannary.png';

export default function About(props) {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center">
                <a className="font-bold text-4xl pt-20 px-32"> Meet the team behind Kinguistics</a>
                <a className="text-xl px-32 pt-6">
                    To address the educational disparities faced by underprivileged students in King County schools’
                    foreign language programs, our team aims to support high school students by offering free resources
                    and opportunities for students to further their learning and collaborate with peers outside of school.
                </a>
                <div className="flex flex-row flex-wrap justify-around py-6 px-20">
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={sarah} alt="Portrait"/>
                        <a className="font-bold text-2xl">Sarah Thomas<br/></a>
                        <a className="text-xl">UX/UI Designer + PM</a>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={vannary} alt="Portrait"/>
                        <a className="font-bold text-2xl">Vannary Sou<br/></a>
                        <a className="text-xl">User Researcher</a>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={justin} alt="Portrait"/>
                        <a className="font-bold text-2xl">Justin Sukomol<br/></a>
                        <a className="text-xl">UX/UI Designer + PM</a>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-around px-72">
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={scott} alt="Portrait"/>
                        <a className="font-bold text-2xl">Scott Nguyen<br/></a>
                        <a className="text-xl">Developer</a>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={matthew} alt="Portrait"/>
                        <a className="font-bold text-2xl">Matthew Bacarro<br/></a>
                        <a className="text-xl">Developer</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
