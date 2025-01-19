import React, { useState } from 'react';
import './PersonCard.css';
    
const PersonCard = (props) => {
    const [user, setUser] = useState({
        firstName: props.firstName,
        lastName: props.lastName,
        age: props.age,
        hairColor: props.hairColor
    });
    const handleClick = () => {
        setUser({
            ...user,
            age: user.age + 1
        });
    };
    return (
        <div className="main">
            <div className="card">
                <h1>{user.lastName}, {user.firstName}</h1>
                <p>Age: {user.age}</p>
                <p>Hair color: {user.hairColor}</p>
                <button onClick={ handleClick }>Click to increment age</button>
            </div>
        </div>
    );
}
export default PersonCard;