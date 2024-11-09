const Sequelize = require('sequelize');

const sequelizeConfig = {
    dialect: 'postgres',
    port:5433,
    host: 'localhost',
    logging: console.log
};
const sequelize = new Sequelize('fatec', 'fatec', 'fatec', sequelizeConfig);

module.exports = {sequelize};