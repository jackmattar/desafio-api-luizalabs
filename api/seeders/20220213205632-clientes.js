'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [{
       nome: 'John Doe',
       email: 'jhon@test',
       createdAt: new Date(),
       updatedAt: new Date()
    }], {}); 
 },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
