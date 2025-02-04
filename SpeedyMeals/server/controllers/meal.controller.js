import Meal from "../models/meal.models.js";

const MealController = {
    findAllMeals: (req, res) => {
        Meal.find()
            .then(allMeals => res.json(allMeals))
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    },

    findMeal: (req, res) => {
        Meal.findOne({ _id: req.params.id })
            .then(singleMeal => {
                if (!singleMeal) {
                    return res.status(404).json({ success: false, message: "Meal not found" });
                }
                res.json(singleMeal);
            })
            .catch(error => response.json(error));
    },

    createMeal: (req, res) => {
        Meal.create(req.body)
            .then(newMeal => res.status(201).json(newMeal))
            .catch(err => res.status(400).json(err));
    },

    updateMeal: (req, res) => {
        let mealId = req.params.id;

        Meal.findOneAndUpdate(
            { _id: mealId },
            { $set: req.body },
            { new: true, runValidators: true }
        )
            .then(meal => {
                if (!meal) {
                    return res.status(404).json({ message: "Meal not found" });
                }
                res.json(meal);
            })
            .catch(error => res.status(400).json(error));
    },

    deleteMeal: (req, res) => {
        Meal.deleteOne({ _id: req.params.id })
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.status(404).json({ success: false, message: "Meal not found" });
                }
                res.json(result);
            })
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    }
};

export default MealController;