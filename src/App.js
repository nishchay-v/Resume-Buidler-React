import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Organisms/Navbar";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Register" element={<Register />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
