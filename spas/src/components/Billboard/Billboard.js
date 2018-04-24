import React, { Component } from 'react';
import './Billboard.css';
import Arrow from '../Arrow/Arrow';


import { Parallax, Background } from 'react-parallax';


class Billboard extends Component {
  render() {
    return (
    <div className="billboard">
    <Parallax
      blur={0}
     /*  bgImage={ # }
      bgImageAlt=" # " */
      strength={200}
    >
      <div style={{ height: '100vh' }} >
        <div className="billboard-box">
          <h1 className="display">React BP</h1>
          <p className="lead">Boilerplate npm packages that contain components and functionality for a react portfolio app, a basic web store and a more complex web store. These packages contain everything you need to create a sophisticated react apps.</p>
        <Arrow/>
        </div>
      </div>
    </Parallax>
    
  </div>
);}
}
export default Billboard;