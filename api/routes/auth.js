const {Router} = require('express');
const Middleware = require('../middleweare/Middleware');
const Auth= require('../middleweare/authentication');
const routers = Router();

routers.post('/login',Middleware.login);
routers.post('/logout',Middleware.logout);

module.exports = routers;




