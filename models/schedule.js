module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define("Schedule", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1,10],
      primaryKey: true
    },
    class_date: {
      type: DataTypes.DATE,
      allowNull: false,
      len: [1]
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
      len: [1]
    },
    class_type: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    class_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    instructor: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len:[1,2]
    }
  },{
    timestamps: false
  });

  return Schedule;
};
