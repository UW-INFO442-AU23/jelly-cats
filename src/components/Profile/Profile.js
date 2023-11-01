import React, { useEffect, useState } from "react";
import EventCard from '../Events/EventCard.js';
import { Navbar } from '../Navbar/Navbar.js';
import { db } from '../../firebase.js';
import { getDatabase, ref, get } from 'firebase/database';

export default function Profile(props) {
    const user = props.user;
    
    return (
        <div>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className="flex flex-col justify-center mt-16 mx-14 md:mx-20 lg:mx-36">
                <div className="flex flex-col items-center justify-center">
                    <img src={user.photoURL} className="h-48 mt-10 mb-5 rounded-full w-fit" alt="profile"/>
                    <p className="text-4xl font-bold">{user.displayName}</p>
                    <p className="mt-2 text-2xl">{user.email}</p>
                </div>
            </div>
        </div>
    );
}
