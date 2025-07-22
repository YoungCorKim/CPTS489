// Import Sequelize's DataTypes to define column types
const { DataTypes } = require('sequelize');

// Import the Sequelize instance (your DB connection)
const sequelize = require('./db');

// Define a Sequelize model named 'Schedule'
const Schedule = sequelize.define('Schedule', {
  // Title of the event or class
  title: {
    type: DataTypes.STRING,       // This will be stored as TEXT in SQLite
    allowNull: false              // Title must be provided
  },

  // Start time of the schedule (can be a date or date-time)
  startTime: {
    type: DataTypes.DATE,         // Sequelize will store this as a DATETIME
    allowNull: false              // Must have a start time
  },

  // End time of the schedule
  endTime: {
    type: DataTypes.DATE,         // Also a DATETIME type
    allowNull: false              // Must have an end time
  },

  // Foreign key to associate this schedule with a user
  userId: {
    type: DataTypes.INTEGER,      // Assuming your User model has an INTEGER ID
    allowNull: false              // Schedule must belong to a user
  }
}, {
  // Optional model options
  timestamps: true                // Automatically adds createdAt and updatedAt
});

// Export the model so it can be used in other files
module.exports = Schedule;
