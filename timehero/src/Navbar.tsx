  import React from 'react';
    import './Navbar.css';
    function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <a href="/">Timer</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
              
            </ul>
        </nav>
    );
}

export default Navbar;