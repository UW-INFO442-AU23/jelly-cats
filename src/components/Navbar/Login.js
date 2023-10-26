import React from 'react';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

export function Login(props) {
    const auth = getAuth();

    const handleSignIn = () => {
        signInWithRedirect(auth, new GoogleAuthProvider());
    };

    return (
        <div>
            <button className="px-6 py-1 font-bold text-white bg-indigo-500 rounded-lg md:text-xl" onClick={handleSignIn}>Login</button>
        </div>
    );
}