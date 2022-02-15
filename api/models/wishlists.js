'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlists extends Model {

    static associate(models) {
      Wishlists.belongsTo(models.Products);
      Wishlists.belongsTo(models.Clientes);
    }
  }
  Wishlists.init({
    cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Wishlists',
  });
  return Wishlists;
};