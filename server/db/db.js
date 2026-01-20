require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL Database successfully connected');

        // Sync models to create tables if they don't exist
        await sequelize.sync({ alter: true });
        console.log('Database tables synchronized');
    } catch (error) {
        console.error("Error connecting to the PostgreSQL Database:", error.message);
    }
}

module.exports = { connectDB, sequelize };
