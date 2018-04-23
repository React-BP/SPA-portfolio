import './Navbar.css';
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-line">
                    <ul>
                        <li>React BP</li> 
                        <li>About</li>
                        <li>Work</li>
                        <li>Store</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
