import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import Home from "../Home/Home.js";
import Events from "../Events/Events.js";
import Resources from "../Resources/Resources.js";
import About from "../About/About.js";
import Profile from "../Profile/Profile.js";

function App(props) {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        // Check if user is logged in
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, [auth]);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Routes>
            <Route path="" element={<Home data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="events" element={<Events data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="resources" element={<Resources data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="about" element={<About data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="profile" element={<Profile data={props.data} user={user} onSignOut={handleSignOut} />} />
        </Routes>
    );
}

export default App;
