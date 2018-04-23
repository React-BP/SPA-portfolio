import React from "react";
import "./Card.css";


const Card = props => (
      <div className="card">
        <img src= {props.img} alt={props.alt} />
        <div className="text">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <button>{props.button}</button>
        </div>
      </div>
);

export default Card;
