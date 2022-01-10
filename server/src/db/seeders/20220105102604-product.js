'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',[
      {
        typeId:1,
        weight: 100,
        color: 'red',
        price: 500,
        dualSimBool:'true',
      },
      {
        typeId:2,
        weight: 300,
        color: 'black',
        price: 800,
      },
      {
        typeId:3,
        weight: 1000,
        color: 'silver',
        price: 1200,
        videoCard: 'BlaBla'
      },
      {
        typeId:1,
        weight: 200,
        color: 'red',
        price: 500,
        dualSimBool:'false',
      },
      {
        typeId:2,
        weight: 300,
        color: 'silver',
        price: 1000,
      },
      {
        typeId:3,
        weight: 900,
        color: 'white',
        price: 1300,
        videoCard: 'Nonono'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
