const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Feedback = sequelize.define('feedback', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Feedback;