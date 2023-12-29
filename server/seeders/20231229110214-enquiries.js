'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enquiries', [
      {
        name: "Fred",
        email: "fred@supabase-seed.com",
        enq_text: "Can you be my math tutor?"
      },
      {
        name: "Mary",
        email: "mary@supabase-seed.com",
        enq_text: "Can you be my coding tutor?"
      },
      {
        name: "George",
        email: "george@supabase-seed.com",
        enq_text: "Can you be my music tutor?"
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enquiries', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
