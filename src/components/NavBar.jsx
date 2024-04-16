import { useState } from 'react';
import '../assets/styles/navBar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Riico Dí</div>
            <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Yogurt</a></li>
                    <li><a href="#">Mermeladas</a></li>
                    <li><a href="#">Barritas</a></li>
                </ul>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
};

export default Navbar;
