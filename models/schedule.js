module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    id: DataTypes.INT,
    description: DataTypes.TEXT
  });
  return BikePal;
};
