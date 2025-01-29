import { Link } from 'react-router-dom';
import axios from "axios";

const DeleteButton = ({ productId, onDelete }) => {
    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(() => onDelete())
            .catch((error) => console.log(error));
    };

    return <Link onClick={handleDelete}>Delete</Link>;
};

export default DeleteButton;