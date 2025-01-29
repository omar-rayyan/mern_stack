import Player from "../models/player.models.js";

const PlayerController = {
    findAllPlayers: (req, res) => {
        Player.find()
            .then(allPlayers => res.json({ success: true, Players: allPlayers }))
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    },

    findPlayer: (req, res) => {
        Player.findOne({ _id: req.params.id })
            .then(singlePlayer => {
                if (!singlePlayer) {
                    return res.status(404).json({ success: false, message: "Player not found" });
                }
                res.json({ success: true, Player: singlePlayer });
            })
            .catch(error => response.json(error));
    },

    createPlayer: (req, res) => {
        Player.create(req.body)
            .then(newPlayer => res.status(201).json({ success: true, Player: newPlayer }))
            .catch(err => res.status(400).json(err));
    },

    updatePlayer: (req, res) => {
        let playerId = req.params.id;

        Player.findOneAndUpdate(
            { _id: playerId },
            { $set: req.body },
            { new: true, runValidators: true }
        )
            .then(player => {
                if (!player) {
                    return res.status(404).json({ message: "Player not found" });
                }
                res.json(player);
            })
            .catch(error => res.status(400).json(error));
    },

    deletePlayer: (req, res) => {
        Player.deleteOne({ _id: req.params.id })
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.status(404).json({ success: false, message: "Player not found" });
                }
                res.json({ success: true, result });
            })
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    }
};

export default PlayerController;