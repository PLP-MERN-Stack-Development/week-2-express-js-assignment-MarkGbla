const express= requires('express');
const routes =express.routes();
const productController = requires('../controller/productController');
//const auth = requires('../Middleware/auth');

routes.get('/', productController.getAllProducts);
routes.get('/:id', productController.getProductById);   
routes.post('/', auth, productController.createProduct);
routes.put('/:id', auth, productController.updateProduct);
routes.delete('/:id',auth,productController.deleteProduct);
routes,get('/search', productController.searchProducts);
routes.get('/category/:categorty', productController.getProductsByCategory);
routes.get('/stats', productController.getProductStats);


// Export the routes
module.exports =routes;
// This code defines the routes for product-related operations in an Express application.
// It includes routes for getting all products, getting a product by ID, creating a new product