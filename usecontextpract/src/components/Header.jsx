import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../contexts/DarkMode';

export default function Header() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <>
            <header className='header-dark'>
                <div className={darkMode ? "header-dark" : "header-light"}>
                    <nav>
                        <ul className='header_links'>
                            <button onClick={toggleDarkMode}>Theme</button>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/about' className='link'>About</Link></li>
                            <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
