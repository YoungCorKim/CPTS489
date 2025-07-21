const sequelize = require('./db');
const { getRow } = require('./db');
const { Model, DataTypes } = require('sequelize');

class User extends Model { 
    static async findAccount(username, password){
        try {
            const user = await User.findOne({
                where: {
                    username: username,
                    password: password
                }
            });
            return user ? user : null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

User.init(
    {
        // Attributes
        // Each of These are Strings
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize, // Connection to the Database
    },
);

module.exports = User;