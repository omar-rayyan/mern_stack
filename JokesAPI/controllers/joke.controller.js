import Joke from "../models/joke.models.js";

const JokeController = {
    findAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes => res.json({ success: true, Jokes: allJokes }))
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    },

    findJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(singleJoke => {
                if (!singleJoke) {
                    return res.status(404).json({ success: false, message: "Joke not found" });
                }
                res.json({ success: true, Joke: singleJoke });
            })
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    },

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.status(201).json({ success: true, Joke: newJoke }))
            .catch(err => res.status(400).json({ success: false, error: err.message }));
    },

    updateJoke: (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedJoke => {
                if (!updatedJoke) {
                    return res.status(404).json({ success: false, message: "Joke not found" });
                }
                res.json({ success: true, Joke: updatedJoke });
            })
            .catch(err => res.status(400).json({ success: false, error: err.message }));
    },

    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.status(404).json({ success: false, message: "Joke not found" });
                }
                res.json({ success: true, result });
            })
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    }
};

export default JokeController;