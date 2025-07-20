// SQLite Constant/Creation of Database
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize ("responses", "jdfaber", "pass", {
    host: "localhost",
    dialect: 'sqlite',
    storage: './results.sqlite',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

// Creates a Database if There is None
sequelize.sync({ force: true }).then(()=> {
    setup();
});

// Defining Setup
async function setup(){
    const Users = require('./User'); 

    // Edit this to Have Login Information
    const response1 = await Users.create({name: "Martin Blackwood", type: "Student"});

    //Create a Student/Professor Database Too
}

// Sequalize Export
module.exports = sequelize;