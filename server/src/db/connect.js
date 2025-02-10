import { Sequelize } from 'sequelize';

const DB_HOST = process.env.DB_HOST || 'localhost';
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: 'postgres',
    host: 'localhost'
});

async function syncronize() {
    // sync
    try {
        await sequelize.sync({ force: true });
        console.log('Database synchonized successfully')
    } catch (err) {
        console.log("Unable to synchronize database: ", err);
    }
}

export { syncronize, sequelize }