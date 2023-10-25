import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar.js';

export default function Resources(props) {

    return (
        <div>
            <Navbar user={props.user} onSignOut={props.onSignOut} />
        </div>
    )
}