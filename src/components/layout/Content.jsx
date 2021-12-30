import React from "react";
import './Content.css';
import { Routes, Route } from "react-router-dom";

import About  from "../../views/examples/About";
import Param from "../../views/examples/Param";
import Home from "../../views/examples/Home";

const Content = props => (

    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </main>

)

export default Content