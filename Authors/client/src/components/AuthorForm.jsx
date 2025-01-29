import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams, useNavigate, Link } from "react-router-dom";

const initialState = {
    name: "",
    nameError: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: action.value,
                [`${action.field}Error`]: action.error || "",
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

const AuthorForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { id } = useParams();
    const isSubmitTrigger = !id;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSubmitTrigger) {
            axios.get(`http://localhost:8000/api/authors/${id}`)
                .then((response) => {
                    const authorData = response.data.Author;
                dispatch({ type: "SET_FIELD", field: "name", value: authorData.name });
                })
                .catch((error) => console.log(error));
        }
    }, [id, isSubmitTrigger]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_FIELD", field: name, value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name } = state;

        if (isSubmitTrigger) {
            axios.post("http://localhost:8000/api/authors/create", {name})
                .then(() => navigate("/"))
                .catch(error => {
                    const errorResponse = error.response.data.errors;
                    for (const key of Object.keys(errorResponse)) {
                        dispatch({ type: "SET_FIELD", field: key, value: name, error: errorResponse[key].message });
                    }
                })
        } else {
            axios.patch(`http://localhost:8000/api/authors/update/${id}`, {name})
                .then(() => navigate("/"))
                .catch(error => {
                    const errorResponse = error.response.data.errors;
                    for (const key of Object.keys(errorResponse)) {
                        dispatch({ type: "SET_FIELD", field: key, value: name, error: errorResponse[key].message });
                    }
                })
        }

        dispatch({ type: "RESET" });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h1 className="form-title">{isSubmitTrigger ? "Add Author" : "Edit Author"}</h1>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {state.nameError && <p className="error-message">{state.nameError}</p>}
                </div>
                <button type="submit" className="form-submit-button">Submit</button>
                {!isSubmitTrigger && <div><br/><Link to={"/"}>Back To Home</Link></div>}
            </form>
        </div>
    );
};

export default AuthorForm;