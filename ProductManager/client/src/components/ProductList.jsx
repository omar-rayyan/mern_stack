import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import DeleteButton from './DeleteButton';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setProducts(res.data.Products);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [products]);

    const refreshProductList = () => {
        navigate("/");
    }

    return (
        <div className="container products-container">
            <h1 className="form-title">Products List:</h1>
            <ul>
                {!loaded ? (<h3>Loading...</h3>) :
                    (products.map((product) => (
                        <li key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                {product.title}
                            </Link> | <Link to={`/products/${product._id}/update`}>Update</Link> | <DeleteButton productId={product._id} onDelete={() => refreshProductList()} />
                            
                        </li>
                    )))
                }
            </ul>
        </div>
    );
};

export default ProductList;