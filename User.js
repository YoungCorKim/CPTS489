const sequelize = require('./db');
const { Model, DataTypes } = require('sequelize');

class User extends Model { }

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
    }, {
        sequelize, // Connection to the Database
    },
);

module.exports = User;