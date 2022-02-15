const express = require('express');
const app = express();

//Servidor
const port = 3000;
app.listen(port, console.log(`Servidor Rodando na porta ${port}`));

//Routes
const routes = require('./routes/index');
routes(app);

module.exports = app;