const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Message = sequelize.define('message', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    lectureId: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    createdAt: 'timestamp',
    updatedAt: false
});

module.exports = Message;