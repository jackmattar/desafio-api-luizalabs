require("dotenv-safe").config();
const db = require('../models');
const jwt = require('jsonwebtoken');
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

class Middleware{
    
    static async login(req, res, next){
        //acesso mocado apenas para API teste
        console.log(req.body.user ,req.body.password)
        if(req.body.user === 'root' && req.body.password === 'admin'){
          
          //AUTORIZAÇÃO OK
          const id = 1;
          const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 360
          });
          localStorage.setItem('token', token);
          return res.json({ auth: true, token: token });
        };
        res.status(500).json({message: 'Login inválido, verifique os dados!'});
    };

    static logout(req, res) {
      localStorage.removeItem('token');
        res.json({ message: 'Deslogado com sucesso',auth: false, token: null });
    };
}

module.exports = Middleware;