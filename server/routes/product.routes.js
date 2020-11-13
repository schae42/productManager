const ProductController = require('../controllers/product.controller');

module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.post('/api/new', ProductController.createProduct);
    app.get('/api/new', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    app.put('/:id/edit', ProductController.updateProduct);
    app.get('/:id/edit', ProductController.editProduct);
}