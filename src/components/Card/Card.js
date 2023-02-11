import React from 'react';
import './Card.css';

import icon from '../../Images/location.png'

const Card = (props) => {
    console.log(props.item)
    return (
        <div className='card_container'>
            <div className="card_img">
                <img src={props.item.imageUrl} alt="" />
            </div>
            <div className="card_content">
                <div className="card_content-location">
                    <img src={icon} alt="" />
                    <span>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} target='blank'>View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="desc">
                    {props.item.description}
                </p>
            </div>
        </div>
    );
};

export default Card;