import mongoose from 'mongoose';

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

export default Joke;