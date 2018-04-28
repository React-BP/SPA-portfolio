import React, { Component } from 'react';
import ReactModal from "react-modal";
import "./DetailModal.css";

class DetailModal extends Component {
    render(props) {
        return (
            <div>
                <ReactModal 
                isOpen={this.props.isOpen}
                contentLabel="onRequestClose Example"
                onRequestClose={this.props.onRequestClose}
                className="Modal"
                overlayClassName="Overlay"
                >
                <div className="work-grid-container vertical-center">
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
            
                <button onClick={this.props.onRequestClose}>Close Modal</button>
                </ReactModal>
            </div>
        );
    }
}

export default DetailModal;