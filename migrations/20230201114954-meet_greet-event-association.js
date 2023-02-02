'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('meet_greets',{
      fields: ['event_id'],
      type: 'foreign key',
      name: 'meet_greet-event-association',
      references: {
        table: 'events',
        field: 'event_id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('meet_greets',{
      fields: ['event_id'],
      type: 'foreign key',
      name: 'meet_greet-event-association',
      references: {
        table: 'events',
        field: 'event_id'
      }
    })
  }
};
