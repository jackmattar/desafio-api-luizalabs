const {Router} = require('express');
const WishlistController = require('../controllers/WishlistController');
const Auth= require('../middleweare/authentication');
const routers = Router();

routers.get('/favoritos/:id',Auth.verifyJWT,WishlistController.getList);//ok

module.exports = routers;