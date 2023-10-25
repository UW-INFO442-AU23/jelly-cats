import React from "react";
import { Navbar } from "../Navbar/Navbar.js";

export default function Profile(props) {
    const user = props.user;
    return (
        <div>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
            <div className="flex flex-col justify-center mx-14 md:mx-20 lg:mx-36">
                <div className="flex flex-col items-center justify-center">
                    <img src={ user.photoURL } className="h-48 my-10 rounded-full w-fit" alt="profile"/>
                    <p className="text-4xl font-bold">{user.displayName}</p>
                </div>
                <p className="mt-10 text-2xl font-bold">Upcoming Events</p>
                <p className="mt-10 text-2xl font-bold">Previous Events</p>
            </div>
        </div>
    );
}
