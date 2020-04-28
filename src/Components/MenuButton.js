import React from 'react';

const menuButton = props => (
    <button className="menu-icon" onClick={props.click}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
    </button>
);

export default menuButton;