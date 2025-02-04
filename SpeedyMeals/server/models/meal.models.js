import mongoose from 'mongoose';

const forbiddenIngredients = ['cheese', 'pepper', 'salt'];

const ingredientValidator = {
    validator: function(value) {
        return !forbiddenIngredients.includes(value.toLowerCase());
    },
    message: props => `${props.value} is not allowed as an ingredient.`
};

const MealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Dish name is required.'],
        minLength: [3, "Dish name must be at least 3 characters."],
        maxLength: [20, "Dish name must not be longer than 20 characters."],
    },
    totalMinutes: {
        type: Number,
        required: [true, 'Total dish minutes is required.'],
        min: [2, "Total dish minutes must at least be 2."],
        max: [240, "Total dish minutes must not be more than 240."],
    },
    directions: {
        type: String,
        required: [true, 'Dish directions is required.'],
        minLength: [3, "Dish directions must be at least 3 characters."],
    },
    ingredientOne: {
        type: String,
        validate: ingredientValidator
    },
    ingredientTwo: {
        type: String,
        validate: ingredientValidator
    },
    ingredientThree: {
        type: String,
        validate: ingredientValidator
    },
}, { timestamps: true });

const Meal = mongoose.model('Meal', MealSchema);

export default Meal;