import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams, useNavigate, Link } from "react-router-dom";

const initialState = {
    title: "",
    titleError: "",
    price: "",
    priceError: "",
    description: "",
    descriptionError: "",
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

const ProductForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { id } = useParams();
    const isSubmitTrigger = !id;
    const navigate = useNavigate();

    const validateField = (field, value) => {
        switch (field) {
            case "title":
                if (value.length < 1 && isSubmitTrigger) return "";
                if (value.length < 2) {
                    const error = "Title must be 2 characters or longer!";
                    dispatch({ type: "SET_FIELD", field: field, value, error });
                }
                return "";
            case "description":
                if (value.length < 1 && isSubmitTrigger) return "";
                if (value.length < 2) {
                    const error = "Email must be 2 characters or longer!";
                    dispatch({ type: "SET_FIELD", field: field, value, error });
                }
                return "";
        }
    };

    useEffect(() => {
        if (!isSubmitTrigger) {
            axios.get(`http://localhost:8000/api/products/${id}`)
                .then((response) => {
                    const productData = response.data.Product;
                    dispatch({ type: "SET_FIELD", field: "title", value: productData.title });
                dispatch({ type: "SET_FIELD", field: "price", value: productData.price });
                dispatch({ type: "SET_FIELD", field: "description", value: productData.description });
                })
                .catch((error) => console.log(error));
        }
    }, [id, isSubmitTrigger]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_FIELD", field: name, value });
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, price, description} = state;
        const productData = { title, description, price: parseFloat(price) };
        const errors = validateField("title", title) + validateField("description", description);
        
        if(price.length < 1) {
            const error = "Please enter a price first.";
            dispatch({ type: "SET_FIELD", field: "price", price, error });
            return;
        }

        if (errors.length > 1) return;

        if (isSubmitTrigger) {
            axios.post("http://localhost:8000/api/products/create", productData)
                .then(() => navigate("/"))
                .catch((error) => console.log(error));
        } else {
            axios.patch(`http://localhost:8000/api/products/update/${id}`, productData)
                .then(() => navigate("/"))
                .catch((error) => console.log(error));
        }

        dispatch({ type: "RESET" });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h1 className="form-title">{isSubmitTrigger ? "Create Product" : "Edit Product"}</h1>
                <div className="form-group">
                    <label className="form-label">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={state.title}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {state.titleError && <p className="error-message">{state.titleError}</p>}
                </div>
                <div className="form-group">
                    <label className="form-label">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={state.price}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {state.priceError && <p className="error-message">{state.priceError}</p>}
                </div>
                <div className="form-group">
                    <label className="form-label">Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={state.description}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {state.descriptionError && <p className="error-message">{state.descriptionError}</p>}
                </div>
                <button type="submit" className="form-submit-button">Submit</button>
                {!isSubmitTrigger && <div><br/><Link to={"/"}>Back To Home</Link></div>}
            </form>
        </div>
    );
};

export default ProductForm;