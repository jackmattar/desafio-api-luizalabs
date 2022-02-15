const {Router} = require('express');
const ClienteController = require('../controllers/ClienteController');
const Auth= require('../middleweare/authentication');
const routers = Router();

routers.get('/clientes/:id',Auth.verifyJWT,ClienteController.getClient);//ok
routers.post('/clientes',ClienteController.postClient);//ok
routers.put('/clientes/:id',Auth.verifyJWT,ClienteController.updateClient);//ok
routers.delete('/clientes/:id',Auth.verifyJWT,ClienteController.deleteClient);//ok

module.exports = routers;
