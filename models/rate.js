'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.rate.belongsTo(models.user)
      //models.rate.belongsTo(models.ticket)
    }
  }
  rate.init({
    comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'rate',
  });
  return rate;
};