import Author from "../models/author.models.js";

const AuthorController = {
    findAllAuthors: (req, res) => {
        Author.find()
            .then(allAuthors => res.json({ success: true, Authors: allAuthors }))
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    },

    findAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(singleAuthor => {
                if (!singleAuthor) {
                    return res.status(404).json({ success: false, message: "Author not found" });
                }
                res.json({ success: true, Author: singleAuthor });
            })
            .catch(error => response.json(error));
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.status(201).json({ success: true, Author: newAuthor }))
            .catch(err => res.status(400).json(err));
    },

    updateAuthor: (req, res) => {
        let authorId = req.params.authorId;

        Author.findOneAndUpdate(
            { _id: authorId },
            { $set: req.body },
            { new: true, runValidators: true }
        )
            .then(author => {
                if (!author) {
                    return res.status(404).json({ message: "Author not found" });
                }
                res.json(author);
            })
            .catch(error => res.status(400).json(error));
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.status(404).json({ success: false, message: "Author not found" });
                }
                res.json({ success: true, result });
            })
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    }
};

export default AuthorController;