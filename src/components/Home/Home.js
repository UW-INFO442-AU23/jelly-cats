import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar.js';
import home from '../../imgs/Home.png';
import './Home.css';

export default function Home(props) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center pt-10 px-32 h-auto flex-center">
        <div className="flex flex-col justify-items-start basis-1/2">
          <a className="text-4xl font-bold">Accessible and collaborative language-learning</a>
          <a className="pt-8 text-2xl">Kinguistics strives to provide accessible collaborative language-learning opportunities for high school students in King County, WA. </a>
        </div>
        <div>
          <img className="h-fit basis-1/2" src={home} alt="Home" />
        </div>
      </div>
    </div>
  );
}