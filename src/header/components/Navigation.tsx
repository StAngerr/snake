import React from 'react';

export const Navigation = () => {
    return <div className="navbar">
        <div className="navbar-brand">
            <img src="../../../assets/Colorful_Animal_Snake.svg" alt="snake-logo"/>
        </div>
        <div className="navbar-menu">
            <div className="navbar-item">Home</div>
            <div className="navbar-item">Settings</div>
            <div className="navbar-item">About</div>
        </div>
    </div>;
};
