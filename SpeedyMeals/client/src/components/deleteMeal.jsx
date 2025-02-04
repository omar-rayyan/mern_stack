import axios from "axios";

const deleteMeal = (mealId) => {
    axios
        .delete(`http://localhost:8000/api/meals/delete/${mealId}`)
        .then(() => onDelete())
        .catch((error) => console.log(error));
};

export default deleteMeal;