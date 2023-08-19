const { Sequelize } = require("sequelize");

const DB_NAME = process.env.DB_NAME || 'beardb';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';

const dbConfig = {
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: 5432,
  dialect: "postgres",
};


const sequelize = new Sequelize(dbConfig);

module.exports = {
  sequelize, dbConfig
};