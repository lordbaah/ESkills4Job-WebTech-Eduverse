const Sequelize = require('sequelize');

// import database connection
const db = require('../database');

const Enrollment = db.define('enrollments', {
    enrollment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    enrollment_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    student_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    course_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//defining relationship in the enrollment model
//Enrollment.associate = (models) => {
    //one to many relationship with Student
    // Enrollment.belongsTo(models.Student, {
    //     foreignKey: 'student_id',
    //     as: 'students'
    // });
    // //one to many relationship with course
    // Enrollment.belongsTo(models.Course, {
    //     foreignKey: 'course_id',
    //     as: 'courses'
    // });
//};

module.exports = Enrollment;