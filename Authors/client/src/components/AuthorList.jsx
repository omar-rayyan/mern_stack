import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import DeleteButton from './DeleteButton';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                setAuthors(res.data.Authors);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [authors]);

    const refreshAuthorsList = () => {
        navigate("/");
    }

    return (
        <div className="container products-container">
            <h1 className="form-title">Authors List:</h1>
            <ul>
                {!loaded ? (<h3>Loading...</h3>) :
                    (authors.map((author) => (
                        <li key={author._id}>
                            <Link to={`/authors/${author._id}`}>
                                {author.name}
                            </Link> | <Link to={`/authors/${author._id}/update`}>Update</Link> | <DeleteButton authorId={author._id} onDelete={() => refreshAuthorsList()} />
                            
                        </li>
                    )))
                }
            </ul>
        </div>
    );
};

export default AuthorList;