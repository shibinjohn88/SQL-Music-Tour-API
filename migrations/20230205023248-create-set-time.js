'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stages',
          key: 'stage_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'events',
          key: 'event_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      band_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'bands',
          key: 'band_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};