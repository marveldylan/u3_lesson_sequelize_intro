'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Add seed commands here.
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'John',
          email: 'demo@demo.com',
          password: 'asdkfjkjfsadlj',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
 
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
