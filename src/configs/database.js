const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DatabaseConstants } = require('../constants/DatabaseConstants');

// Initialize Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT
  }
);

// Test Database Connection
const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log(DatabaseConstants.ConnectionSuccessful);
  } catch (error) {
    console.error(DatabaseConstants.ConnectionFailed, error);
  }
};

connect();

module.exports = sequelize;
