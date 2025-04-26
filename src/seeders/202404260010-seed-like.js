'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('like', [
      {
        blog_id: 1,
        like_count: 1
      },
      {
        blog_id: 2,
        like_count: 1
      },
      {
        blog_id: 1,
        like_count: 1
      },
      {
        blog_id: 3,
        like_count: 1
      },
      {
        blog_id: 2,
        like_count: 1
      },
      {
        blog_id: 3,
        like_count: 1
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('like', null, {});
  }
};
