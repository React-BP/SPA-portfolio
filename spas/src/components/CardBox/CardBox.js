import React, { Component } from 'react';
import Card from '../Card/Card'

const CardBox = props => (
            <div className="card-box">
                <div className="card-content">
                    <main className="card-grid">
                        {props.state.cardData.map(data => (
                        <Card 
                        key={data.id}
                        img={data.img}
                        alt={data.alt}
                        title={data.title}
                        desc={data.desc}
                        button={data.button}
                        />
                        ))}
                    </main>
                </div>
            </div>
        );
    

export default CardBox;