const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Quiz = sequelize.define("quiz", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  questions: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: []
  },
}, {
  timestamps: true
});

module.exports = Quiz;
