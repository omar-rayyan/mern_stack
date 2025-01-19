import React, { useState } from  'react';
import './RegisterationForm.css'
    
const RegisterationForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [passwordConfirmation, setPasswordConfirmation] = useState(""); 
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, passwordConfirmation};

        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("");
            setPasswordConfirmationError("");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordConfirmationError("");
            setPasswordError("");
        }
    }

    const handlePasswordConfirmation = (e) => {
        setPasswordConfirmation(e.target.value);
        if (e.target.value !== password) {
            setPasswordConfirmationError("Passwords must match!");
        } else {
            setPasswordConfirmationError("");
        }
    }
    return (
        <div className="container">
            <form onSubmit={createUser} className="form">
                <h1 className="form-title">Create User</h1>
                <div className="form-group">
                    <label className="form-label">First Name:</label> 
                    <input type="text" value={firstName} onChange={handleFirstName} className="form-input" />
                    {
                    firstNameError ?
                    <p className="error-message">{ firstNameError }</p> :
                    ''
                    }
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name:</label> 
                    <input type="text" value={lastName} onChange={handleLastName} className="form-input" />
                    {
                    lastNameError ?
                    <p className="error-message">{ lastNameError }</p> :
                    ''
                    }
                </div>
                <div className="form-group">
                    <label className="form-label">Email Address:</label> 
                    <input type="text" value={email} onChange={handleEmail} className="form-input" />
                    {
                    emailError ?
                    <p className="error-message">{ emailError }</p> :
                    ''
                    }
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input type="password" value={password} onChange={handlePassword} className="form-input" />
                    {
                    passwordError ?
                    <p className="error-message">{ passwordError }</p> :
                    ''
                    }
                </div>
                <div className="form-group">
                    <label className="form-label">Confirm Password:</label>
                    <input type="password" value={passwordConfirmation} onChange={handlePasswordConfirmation} className="form-input" />
                    {
                    passwordConfirmationError ?
                    <p className="error-message">{ passwordConfirmationError }</p> :
                    ''
                    }
                </div>
            </form>
            <div className="form-data">
                <h2 className="form-data-title">Your form data</h2>
                <p className="form-data-item">First Name: {firstName}</p>
                <p className="form-data-item">Last Name: {lastName}</p>
                <p className="form-data-item">Email: {email}</p>
                <p className="form-data-item">Password: {password}</p>
                <p className="form-data-item">Confirm Password: {passwordConfirmation}</p>
            </div>
        </div>

    );
}
export default RegisterationForm;