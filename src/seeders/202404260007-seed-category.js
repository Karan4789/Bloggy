'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category', [
      {
        category_name: 'Technology',
        description: 'Blogs about latest technology trends.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: 'Health & Wellness',
        description: 'Tips and news about healthy living.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: 'Space Exploration',
        description: 'Articles about space exploration and astronomy.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: 'Travel',
        description: 'Tips and guides for traveling the world.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: 'Food & Recipes',
        description: 'Delicious recipes and culinary inspiration.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        category_name: 'Personal Finance',
        description: 'Tips for managing your money and investing wisely.',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category', null, {});
  }
};