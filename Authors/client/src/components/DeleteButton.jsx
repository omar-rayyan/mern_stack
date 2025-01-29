import { Link } from 'react-router-dom';
import axios from "axios";

const DeleteButton = ({ authorId, onDelete }) => {
    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/api/authors/delete/${authorId}`)
            .then(() => onDelete())
            .catch((error) => console.log(error));
    };

    return <Link onClick={handleDelete}>Delete</Link>;
};

export default DeleteButton;