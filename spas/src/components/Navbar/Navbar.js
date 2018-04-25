import './Navbar.css';
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-line">
                    <ul>
                        <li><a href="#about">About</a></li> 
                        <li><a href="./"><img width="32px" src="../../images/reactBP.png" alt="React BP" /></a></li> 
                        <li><a href="#work">Work</a></li> 
                        {/* <li><a href="#store">Store</a></li>  */}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
