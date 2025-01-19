import React, { useState } from  'react';
import './RegisterationForm.css'
    
const RegisterationForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConfirmation, setPasswordConfirmation] = useState("");  
    
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
    return (
        <div className="container">
            <form onSubmit={createUser} className="form">
                <h1 className="form-title">Create User</h1>
                <div className="form-group">
                    <label className="form-label">First Name:</label> 
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name:</label> 
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Email Address:</label> 
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Confirm Password:</label>
                    <input type="text" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className="form-input" />
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