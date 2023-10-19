import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar.js";
import justin from '../../imgs/About/Justin.png';
import matthew from '../../imgs/About/Matthew.png';
import sarah from '../../imgs/About/Sarah.png';
import scott from '../../imgs/About/Scott.png';
import vannary from '../../imgs/About/Vannary.png';

export default function About(props) {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center">
                <p className="font-bold text-4xl pt-20 px-32"> Meet the team behind Kinguistics</p>
                <p className="text-xl px-32 pt-6">
                    To address the educational disparities faced by underprivileged students in King County schools’
                    foreign language programs, our team aims to support high school students by offering free resources
                    and opportunities for students to further their learning and collaborate with peers outside of school.
                </p>
                <div className="flex flex-row flex-wrap justify-around py-6 px-20">
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={sarah} alt="Portrait"/>
                        <p className="font-bold text-2xl">Sarah Thomas<br/></p>
                        <p className="text-xl">UX/UI Designer + PM</p>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={vannary} alt="Portrait"/>
                        <p className="font-bold text-2xl">Vannary Sou<br/></p>
                        <p className="text-xl">User Researcher</p>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={justin} alt="Portrait"/>
                        <p className="font-bold text-2xl">Justin Sukomol<br/></p>
                        <p className="text-xl">UX/UI Designer + PM</p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-around px-72">
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={scott} alt="Portrait"/>
                        <p className="font-bold text-2xl">Scott Nguyen<br/></p>
                        <p className="text-xl">Developer</p>
                    </div>
                    <div className="flex flex-col justify-center flex-center">
                        <img className="w-60" src={matthew} alt="Portrait"/>
                        <p className="font-bold text-2xl">Matthew Bacarro<br/></p>
                        <p className="text-xl">Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
