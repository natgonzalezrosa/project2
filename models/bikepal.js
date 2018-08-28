module.exports = function(sequelize, DataTypes) {
  var BikePal = sequelize.define("BikePal", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return BikePal;
};
