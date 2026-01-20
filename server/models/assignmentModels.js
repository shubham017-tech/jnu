const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db");

const Assignment = sequelize.define("assignment", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  questions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  pdfUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true
});

module.exports = Assignment;
