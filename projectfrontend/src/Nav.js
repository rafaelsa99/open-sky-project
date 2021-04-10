import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";;

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>OpenSky</h3>
            <ul className="nav-links"> 
                
            <Link style={navStyle} to="/">Home</Link>
                
                
            <Link style={navStyle} to="/historic">Historic</Link>
                
            </ul>
        </nav>
    )
}
export default Nav;