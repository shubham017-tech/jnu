const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db");

const registrarFeesModel = sequelize.define("registrarFees", {
   RollNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   Name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   Fees: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
   },
   Fees_status: {
      type: DataTypes.STRING,
      allowNull: false
   },
   Branch: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
   timestamps: true
});

module.exports = registrarFeesModel;