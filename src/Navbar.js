import React from 'react';
import { NavLink } from "react-router-dom";



function myNavBar() {
    return (
        <nav className='MyNavBarClass'>
            <p> <NavLink  to = '/apple'> Apple </NavLink></p>
            <p> <NavLink  to="/orange">Orange</NavLink></p>
            <p> <NavLink  to="/cookie">Cookie</NavLink></p>
        </nav>
    )
}

export default myNavBar;