import JokeController from '../controllers/joke.controller.js';

export default (app) => {
    app.get('/api/jokes', JokeController.findAllJokes);

    app.post('/api/jokes', JokeController.createJoke);

    app.get('/api/jokes/:id', JokeController.findJoke);

    app.patch('/api/jokes/:id', JokeController.updateJoke);

    app.delete('/api/jokes/:id', JokeController.deleteJoke);
};