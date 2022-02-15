require("dotenv-safe").config();
const bodyParser = require('body-parser');
const clientes = require('./clientes');
const favoritos = require('./wishlists');
const products = require('./products');
const auth= require('./auth');

module.exports = app => {
    app.use(bodyParser.json());

    app.get('/', (req, res, next)=>{
        return res.status(200).json({message: 'API Luizalabs rodando'});
    });//ok
    app.use(auth);//ok
    app.use(clientes);//ok
    app.use(favoritos);//ok
    app.use(products);
    

}