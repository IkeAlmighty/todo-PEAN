import { Sequelize } from 'sequelize';

const sequelizeInstance = undefined;
const DB_HOST = process.env.DB_HOST || 'localhost';
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

async function getSequelize() {
    // lazy init sequelizeInstance
    if (!sequelizeInstance) {
        sequelizeInstance = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
            dialect: 'postgres',
            host: 'localhost'
        });

        try {
            await sequelizeInstance.authenticate();
            console.log('Database authenticated successfully')
        } catch (err) {
            console.log("Unable to connect to database: ", err);
        }
    }

    // sync

    try {
        await sequelizeInstance.sync({ force: true });
        console.log('Database synchonized successfully')

        return sequelizeInstance;
    } catch (err) {
        console.log("Unable to synchronize database: ", err);
    }
}

export { getSequelize }