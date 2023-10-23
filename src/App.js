import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home.js";
import Events from "./components/Events/Events.js";
import Resources from "./components/Resources/Resources.js";
import About from "./components/About/About.js";

function App(props) {
    return (
        <Routes>
            <Route path="" element={<Home data={props.data} />} />
            <Route path="events" element={<Events data={props.data} />} />
            <Route path="resources" element={<Resources data={props.data} />} />
            <Route path="about" element={<About data={props.data} />} />
        </Routes>
    );
}

export default App;
