import './Navbar.css';
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-line">
                        <div><img width="40px" src={require('../../images/reactBP.png')} alt="React BP" /></div>
                        <div><a href="./">React BP</a></div> 
                        <div><a href="#about">About</a></div> 
                        <div><a href="#work">Work</a></div> 
                        {/* <li><a href="#store">Store</a></li>  */}
                </div>
            </nav>
        );
    }
}

export default Navbar;