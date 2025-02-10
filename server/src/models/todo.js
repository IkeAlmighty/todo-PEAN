import { sequelize } from '../db/connect.js';
import { DataTypes } from 'sequelize';

const Todo = sequelize.define(
    'Todo',
    {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ts: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }
);

export default Todo;