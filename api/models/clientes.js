'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    static associate(models) {
      Clientes.hasOne(models.Wishlists, {
        foreignKey: 'cliente'
      });
    }
  }
  Clientes.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  
  return Clientes;
};