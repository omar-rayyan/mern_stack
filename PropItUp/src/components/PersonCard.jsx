import React from 'react';
import './PersonCard.css'
    
const PersonCard = (props) => {
    return (
        <div className="main">
            <div className="card">
                <h1>{props.lastName}, {props.firstName}</h1>
                <p>Age: {props.age}</p>
                <p>Hair color: {props.hairColor}</p>
            </div>
        </div>
    );
}
export default PersonCard;