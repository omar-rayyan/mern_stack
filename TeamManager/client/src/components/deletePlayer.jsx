import axios from "axios";

const deletePlayer = (playerId) => {
    axios
        .delete(`http://localhost:8000/api/players/delete/${playerId}`)
        .then(() => onDelete())
        .catch((error) => console.log(error));
};

export default deletePlayer;