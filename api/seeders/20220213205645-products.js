'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
       wishlist: 1,
       productId: '12',
       title: 'Teste',
       image: 'teste-img',
       price: 12.00,
       reviewScore: 4.5,
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
