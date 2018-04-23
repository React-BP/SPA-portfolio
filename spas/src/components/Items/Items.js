import React from 'react';
import { Parallax, Background } from 'react-parallax';
import "./Items.css";

const Items = () => {
    return (
        <div className="work-items">
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../../images/clouds-fog-forest-9754.jpg')}
            bgImageAlt="cloud forest"
            strength={200}
            >
            <div style={{ height: '100vh' }} className="work-items">
                <div className="work-grid-container">
                    <div className="work-about">
                        <div className="work-content-wrapper">
                            <h3>Featured Portfolio Item</h3>
                            <h1>Portfolio Item Title</h1>
                            <p className="lead">Wench lad jolly boat Sail ho tack brig overhaul scuttle quarterdeck come about code of conduct marooned rigging boatswain fluke fire ship bowsprit transom Blimey Jolly Roger Plate Fleet parrel knave smartly.</p>
                        </div>
                    </div>
                    <div className="work-image">
                        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
                    </div>
                </div>
            </div>
        </Parallax>
        </div>
    );
};

export default Items;