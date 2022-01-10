'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductTypes',[
      {title:'telephone'},
      {title:'tablet'},
      {title:'laptop'}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductTypes');
  }
};
