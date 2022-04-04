import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <h2>
                <Link to="/">Resume Builder</Link>
            </h2>

            <div className="navbar__list">
                <ul>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>

                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
