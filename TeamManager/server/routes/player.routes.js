import PlayerController from '../controllers/player.controller.js';

export default (app) => {
    app.get('/api/players', PlayerController.findAllPlayers);

    app.post('/api/players/create', PlayerController.createPlayer);

    app.get('/api/players/:id', PlayerController.findPlayer);

    app.patch('/api/players/update/:id', PlayerController.updatePlayer);

    app.delete('/api/players/delete/:id', PlayerController.deletePlayer);
};