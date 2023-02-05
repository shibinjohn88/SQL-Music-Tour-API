'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      //event
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  
  MeetGreet.init({
    meet_greet_id: {type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    event_id: {
      type: DataTypes.INTEGER
    },
    band_id: {
      type: DataTypes.INTEGER
    },
    meet_start_time: {type:DataTypes.DATE,
      allowNull:false},
    meet_end_time: {type:DataTypes.DATE,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return MeetGreet;
};