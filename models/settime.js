'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, Stage }) {
      // band
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // stage 
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  SetTime.init({
    set_time_id: {type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    stage_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
  });
  return SetTime;
};