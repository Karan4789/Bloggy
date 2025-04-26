'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comment', [
      {
        blog_id: 1,
        user_id: 1,
        comment: 'This blog on AI is very insightful! I learned a lot.',
        comment_date: new Date()
      },
      {
        blog_id: 2,
        user_id: 2,
        comment: 'Great health tips, thanks for sharing!  I will try these.',
        comment_date: new Date()
      },
      {
        blog_id: 1,
        user_id: 3,
        comment: 'Loved the way AI impacts were explained! Very clear.',
        comment_date: new Date()
      },
      {
        blog_id: 3,
        user_id: 1,
        comment: 'Can you also write about AI and ethics?  That would be interesting.',
        comment_date: new Date()
      },
      {
        blog_id: 2,
        user_id: 4,
        comment: 'The sleep tips are really helpful.  Thanks!',
        comment_date: new Date()
      },
      {
        blog_id: 3,
        user_id: 5,
        comment: 'More details on blockchain for supply chains, please.',
        comment_date: new Date()
      },
      {
        blog_id: 1,
        user_id: 2,
        comment: 'AI will certainly shape the future.',
        comment_date: new Date()
      },
      {
        blog_id: 4,
        user_id: 3,
        comment: 'More detail on space missions.',
        comment_date: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comment', null, {});
  }
};