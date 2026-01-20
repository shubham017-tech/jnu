const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Notes = sequelize.define("Notes", {
    notes: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Notes;
