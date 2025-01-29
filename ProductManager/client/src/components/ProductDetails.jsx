import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();

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
            <Link to={"/"}>Back</Link>
        </div>
    );
};

export default ProductDetails;