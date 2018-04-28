import './Navbar.css';
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-line">
                    <ul>
                        <li><img width="40px" src={require('../../images/reactBP.png')} alt="React BP" /></li>
                        <li><a href="./">React BP</a></li> 
                        <li><a href="#about">About</a></li> 
                        <li><a href="#work">Work</a></li> 
                        {/* <li><a href="#store">Store</a></li>  */}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;