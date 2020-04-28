import React from 'react';
import MenuButton from './MenuButton';

const navbar = props => (
    <header className="head">
        <nav className="navbar">
            <div><MenuButton click={props.click}/></div>
            <div className="brand"><a href="#">LOGO</a></div>
            <div className="spacer"></div>
            <div className="navbar-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;