const jwt = require('jsonwebtoken');
require("dotenv-safe").config();
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  
class Auth{
    static verifyJWT(req, res, next){
        req.headers['x-access-token'] = localStorage.getItem('token')
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ 
            auth: false, 
            message: 'Nenhum token válido encontrado!' 
        });
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Falha na autenticação do token.' });
            req.userId = decoded.id;
            next();
        });
    };
}


module.exports = Auth;