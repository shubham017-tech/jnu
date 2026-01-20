const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const FeesModel = sequelize.define('Fees', {
  studentId: {
    type: DataTypes.INTEGER,
    // Note: Relationships will be defined in a separate associations file or later
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rollno: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('paid', 'unpaid'),
    defaultValue: 'unpaid'
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = FeesModel;