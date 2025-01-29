import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

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

    return (
        <div className="container products-container">
            <h1 className="form-title">Products List:</h1>
            <ul>
                {!loaded ? (<h3>Loading...</h3>) :
                    (products.map((product) => (
                        <li key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                {product.title}
                            </Link>
                        </li>
                    )))
                }
            </ul>
        </div>
    );
};

export default ProductList;