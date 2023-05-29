import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to='/student'>Student</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        </nav>
    );
}

export default NavBar;