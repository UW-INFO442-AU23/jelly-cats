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
                <a className="text-2xl px-32 pt-10">
                    To address the educational disparities faced by underprivileged students in King County schools’
                    foreign language programs, our team aims to support high school students by offering free resources
                    and opportunities for students to further their learning and collaborate with peers outside of school.
                </a>
                <div className="flex flex-row flex-wrap justify-around py-8 px-20">
                    <div className="flex flex-col justify-center flex-center">
                        <img className="h-fit" src={sarah} alt="Portrait"/>
                        <a className="font-bold text-3xl">Sarah Thomas<br/></a>
                        <a className="text-xl">UX/UI Designer + PM</a>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="h-fit" src={vannary} alt="Portrait"/>
                        <a className="font-bold text-3xl">Vannary Sou<br/></a>
                        <a className="text-xl">User Researcher</a>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="h-fit" src={justin} alt="Portrait"/>
                        <a className="font-bold text-3xl">Justin Sukomol<br/></a>
                        <a className="text-xl">UX/UI Designer + PM</a>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-around px-32">
                    <div className="flex flex-col justify-center flex-center">
                        <img className="h-fit" src={scott} alt="Portrait"/>
                        <a className="font-bold text-3xl">Scott Nguyen<br/></a>
                        <a className="text-xl">Developer</a>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="h-fit" src={matthew} alt="Portrait"/>
                        <a className="font-bold text-3xl">Matthew Bacarro<br/></a>
                        <a className="text-xl">Developer</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
