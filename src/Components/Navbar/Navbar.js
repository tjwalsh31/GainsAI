import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="navbar-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-link">
                    <Link to="/workout">Workout Planner</Link>
                </li>
                <li className="navbar-link">
                    <Link to="/meal">Meal Planner</Link>
                </li>
                <li className="navbar-link">
                    <Link to="/diet">About Us</Link>

                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
