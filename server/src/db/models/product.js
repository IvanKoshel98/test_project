'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    typeId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    weight: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    color: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    dualSimBool: {
      type:DataTypes.BOOL,
    },
    videoCard: {
      type:DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};