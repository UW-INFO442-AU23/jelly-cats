import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import Home from '../Home/Home.js';
import Events from '../Events/Events.js';
import EventPage from '../Events/EventPage.js';
import VocabPage from '../Events/VocabPage.js';
import Registered from '../Register/Registered.js';
import Unregistered from '../Register/Unregistered.js';
import Resources from '../Resources/Resources.js';
import About from '../About/About.js';
import Profile from '../Profile/Profile.js';

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
            <Route path="Events" element={<Events data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="/Events/:EventName" element={<EventPage data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="/Events/:EventName/Vocabulary" element={<VocabPage data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="/Registered" element={<Registered data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="/Unregistered" element={<Unregistered data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="Resources" element={<Resources data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="About" element={<About data={props.data} user={user} onSignOut={handleSignOut} />} />
            <Route path="Profile" element={<Profile data={props.data} user={user} onSignOut={handleSignOut} />} />
        </Routes>
    );
}

export default App;
