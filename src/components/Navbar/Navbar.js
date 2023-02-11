import React from 'react';
import './Navbar.css';

import world from '../../Images/world.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={world} alt="world" />
            <h2>my travel journal</h2>
        </nav>
    );
};

export default Navbar;