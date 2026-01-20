const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Announcement = sequelize.define("announcement", {
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    },
    branch: {
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

module.exports = Announcement;