import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Player name is required.'],
        minLength: [3, "Player name must be at least 3 characters."],
    },
    preferredPosition: {
        type: String,
        required: [true, 'Preferred position is required.'],
        minLength: [3, "Preferred position must be at least 3 characters."],
    }
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);

export default Player;