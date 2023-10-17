import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home.js';

function App(props) {
    return (
        <Routes>
            <Route path="/" element={<Home data={props.data} />} />
        </Routes>
    )
}

export default App;