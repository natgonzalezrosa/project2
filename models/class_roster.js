module.exports = function(sequelize, DataTypes) {
    var classRoster = sequelize.define("classRoster", {
        client_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1,10],
            primaryKey: true
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1],
        }
    },{
        timestamps: false
      });
    
      return classRoster;
    };