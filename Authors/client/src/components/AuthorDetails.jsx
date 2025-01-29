import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import DeleteButton from './DeleteButton';

const AuthorDetails = () => {
    const [author, setAuthor] = useState({name: "Loading..."});
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then((res) => {
                setAuthor(res.data.Author);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className='container'>
            <h1 className='form-title'>Author Details</h1>
            <p><strong>Name:</strong> {author.name}</p>
            <br/>
            <Link to={"/"}>Back To Home</Link> | <Link to={`/authors/${author._id}/update`}>Update</Link> | <DeleteButton authorId={author._id} onDelete={() => navigate("/")} />
        </div>
    );
};

export default AuthorDetails;