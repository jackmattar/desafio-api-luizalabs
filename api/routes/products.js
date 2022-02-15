const {Router} = require('express');
const ProductController = require('../controllers/ProductsController');
const Auth= require('../middleweare/authentication');
const routers = Router();

routers.get('/favoritos/:id/:idProduct',Auth.verifyJWT,ProductController.getProduct);//ok
routers.post('/favoritos/:id/:idProduct',Auth.verifyJWT,ProductController.postProduct);//ok
routers.delete('/favoritos/:id/:idProduct',Auth.verifyJWT,ProductController.deleteProduct);//ok

module.exports = routers;