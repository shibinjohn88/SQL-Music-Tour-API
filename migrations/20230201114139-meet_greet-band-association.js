'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('meet_greets',{
      fields: ['band_id'],
      type: 'foreign key',
      name: 'meet_greet-band-association',
      references: {
        table: 'bands',
        field: 'band_id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('meet_greets',{
      fields: ['band_id'],
      type: 'foreign key',
      name: 'meet_greet-band-association',
      references: {
        table: 'bands',
        field: 'band_id'
      }
    })
  }
};
