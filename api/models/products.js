'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
  
    static associate(models) {
      Products.hasOne(models.Wishlists, {
        foreignKey: 'id'
      });
    }
  }
  Products.init({
    wishlist: DataTypes.INTEGER,
    productId: DataTypes.STRING,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    reviewscore: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};