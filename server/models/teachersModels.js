const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Teacher = sequelize.define("teacher", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qualification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'teacher'
    },
}, {
    timestamps: true
});

module.exports = Teacher;