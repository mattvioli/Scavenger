import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('scavenger', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: 'localhost', 
});

export default sequelize;