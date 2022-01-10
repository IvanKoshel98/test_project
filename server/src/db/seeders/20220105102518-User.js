'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[
      {
        firstName: 'Bob',
        lastName: 'Marley',
        email:'bobmarley@gmail.com',
        roleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jon',
        lastName: 'Dou',
        email:'jonDou@gmail.com',
        roleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Admin',
        lastName: 'Admin',
        email:'adminadmin@gmail.com',
        roleId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Den',
        lastName: 'Smith',
        email:'densmith@gmail.com',
        roleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
