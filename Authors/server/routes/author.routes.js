import AuthorController from '../controllers/author.controller.js';

export default (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors);

    app.post('/api/authors/create', AuthorController.createAuthor);

    app.get('/api/authors/:id', AuthorController.findAuthor);

    app.patch('/api/authors/update/:id', AuthorController.updateAuthor);

    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);
};