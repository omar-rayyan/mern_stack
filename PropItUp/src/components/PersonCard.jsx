import React from 'react';
import './PersonCard.css';
    
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return (
        <div className="main">
            <div className="card">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair color: {hairColor}</p>
            </div>
        </div>
    );
}
export default PersonCard;