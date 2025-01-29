import ProductController from '../controllers/product.controller.js';

export default (app) => {
    app.get('/api/products', ProductController.findAllProducts);

    app.post('/api/products/create', ProductController.createProduct);

    app.get('/api/products/:id', ProductController.findProduct);

    app.patch('/api/products/update/:id', ProductController.updateProduct);

    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
};