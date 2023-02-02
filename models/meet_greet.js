'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Meet_Greet.belongsTo(models.Band)
      models.Band.hasMany(Meet_Greet)
      Meet_Greet.belongsTo(models.Event)
      models.Event.hasMany(Meet_Greet)
    }
  }
  Meet_Greet.init({
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
    modelName: 'Meet_Greet',
    tableName: 'meet_greets'
  });
  return Meet_Greet;
};