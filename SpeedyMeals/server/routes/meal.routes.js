import MealController from '../controllers/meal.controller.js';

export default (app) => {
    app.get('/api/meals', MealController.findAllMeals);

    app.post('/api/meals/create', MealController.createMeal);

    app.get('/api/meals/:id', MealController.findMeal);

    app.patch('/api/meals/update/:id', MealController.updateMeal);

    app.delete('/api/meals/delete/:id', MealController.deleteMeal);
};