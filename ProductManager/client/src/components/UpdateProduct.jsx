import { useState, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const initialState = {
    title: "Loading...",
    titleError: "",
    price: "0",
    priceError: "",
    description: "Loading...",
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

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const [state, dispatch] = useReducer(reducer, initialState);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                const productData = res.data.Product;
                setProduct(productData);

                dispatch({ type: "SET_FIELD", field: "title", value: productData.title });
                dispatch({ type: "SET_FIELD", field: "price", value: productData.price });
                dispatch({ type: "SET_FIELD", field: "description", value: productData.description });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    

    const validateField = (field, value, isSubmitTrigger) => {
        switch (field) {
            case "title":
                if (value.length < 1 && !isSubmitTrigger) return "";
                if (value.length < 2) {
                    const error = "Title must be 2 characters or longer!";
                    dispatch({ type: "SET_FIELD", field: field, value, error });
                }
                return "";
            case "description":
                if (value.length < 1 && !isSubmitTrigger) return "";
                if (value.length < 2) {
                    const error = "Email must be 2 characters or longer!";
                    dispatch({ type: "SET_FIELD", field: field, value, error });
                }
                return "";
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_FIELD", field: name, value });
        validateField(name, value, false);
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const { title, price, description} = state;
        const errors = validateField("title", title, true) + validateField("description", description, true);
        if(price.length < 1) {
            const error = "Please enter a price first.";
            dispatch({ type: "SET_FIELD", field: "price", price, error });
            return;
        }
        if (errors.length > 1) return;
        axios.patch('http://localhost:8000/api/products/update/' + id, {title, description, price})
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        navigate("/products/" + id);
    };

    return (
        <div className="container">
            <form onSubmit={handleUpdateProduct} className="form">
                <h1 className="form-title">Update Product</h1>
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
                <br/> <br/>
                <Link to={"/products/" + id}>Back</Link>
            </form>
        </div>
    );
};

export default UpdateProduct;