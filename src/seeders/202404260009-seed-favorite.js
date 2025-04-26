'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('favorite', [
      {
        user_id: 1,
        blog_id: 1
      },
      {
        user_id: 2,
        blog_id: 2
      },
      {
        user_id: 1,
        blog_id: 3
      },
      {
        user_id: 3,
        blog_id: 1
      },
      {
        user_id: 4,
        blog_id: 2
      },
      {
        user_id: 5,
        blog_id: 4
      },
      {
        user_id: 3,
        blog_id: 3
      },
      {
        user_id: 1,
        blog_id: 5
      },
      {
        user_id: 2,
        blog_id: 1
      },
      {
        user_id: 5,
        blog_id: 2
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorite', null, {});
  }
};