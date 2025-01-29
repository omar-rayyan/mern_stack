import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Author name is required.'],
        minLength: [3, "Author name must be at least 3 characters."],
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

export default Author;