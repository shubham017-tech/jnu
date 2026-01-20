const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Registrar = sequelize.define('registrar', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true
});

module.exports = Registrar;
