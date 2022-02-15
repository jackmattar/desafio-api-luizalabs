const {Router} = require('express');
const ProductController = require('../controllers/ProductsController');
const Auth= require('../middleweare/authentication');
const routers = Router();

routers.get('/clientes/:id/favoritos/:idProduct',Auth.verifyJWT,ProductController.getProduct);//ok
routers.post('/clientes/:id/favoritos/:idProduct',Auth.verifyJWT,ProductController.postProduct);//ok
routers.delete('/clientes/:id/favoritos/:idProduct',Auth.verifyJWT,ProductController.deleteProduct);//ok

module.exports = routers;