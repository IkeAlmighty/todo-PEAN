import { Sequelize } from 'sequelize';

const sequelize = undefined;
const DB_HOST = process.env.DB_HOST || 'localhost';
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

export async function synchronize() {
    // lazy init sequelize
    if (!sequelize) {
        sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
            dialect: 'postgres',
            host: 'localhost'
        });

        try {
            await sequelize.authenticate();
            console.log('Database authenticated successfully')
        } catch (err) {
            console.log("Unable to connect to database: ", err);
        }
    }

    // sync

    try {
        await sequelize.sync({ force: true });
        console.log('Database synchonized successfully')
    } catch (err) {
        console.log("Unable to syncrhonize database: ", err);
    }
}