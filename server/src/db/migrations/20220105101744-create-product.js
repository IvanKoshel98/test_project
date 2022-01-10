'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeId:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      weight: {
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      color: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      price: {
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      dualSimBool: {
        type:Sequelize.STRING,
      },
      videoCard: {
        type:Sequelize.STRING,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};