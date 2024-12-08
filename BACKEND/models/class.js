const Sequelize = require('sequelize');
const sequelize = require('../database');

// Define the Class model
const Class = sequelize.define('classes', {
    class_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    instructor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    semester: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    schedule: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Class;
