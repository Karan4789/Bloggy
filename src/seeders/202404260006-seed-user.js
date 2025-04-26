'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        user_id: 1,
        username: 'john_doe',
        email: 'john@example.com',
        password: 'hashedpassword123', // Normally you hash passwords
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 2,
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'hashedpassword456',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 3,
        username: 'alex_martin',
        email: 'alex@example.com',
        password: 'hashedpassword789',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 4,
        username: 'emily_watson',
        email: 'emily@example.com',
        password: 'hashedpassword321',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        user_id: 5,
        username: 'michael_brown',
        email: 'michael@example.com',
        password: 'hashedpassword654',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
