import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import DeleteButton from './DeleteButton';

const ProductDetails = () => {
    const [product, setProduct] = useState({title: "Loading...", price: 0, description: "Loading..."});
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then((res) => {
                setProduct(res.data.Product);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className='container'>
            <h1 className='form-title'>Product Details</h1>
            <p><strong>Title:</strong> {product.title}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <br/>
            <Link to={"/"}>Back To Home</Link> | <Link to={`/products/${product._id}/update`}>Update</Link> | <DeleteButton productId={product._id} onDelete={() => navigate("/")} />
        </div>
    );
};

export default ProductDetails;