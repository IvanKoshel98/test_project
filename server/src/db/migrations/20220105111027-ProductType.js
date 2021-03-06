'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductTypes', {
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      title: {
        type:Sequelize.STRING,
        allowNull:false,
      },
    });  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductTypes');
  }
};
