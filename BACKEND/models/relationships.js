const Student = require('./students');
const Course = require('./courses');
const Instructor = require('./instructor');
const Department = require('./department');
const Class = require('./class');

// Department -> Instructors
Department.hasMany(Instructor, { foreignKey: 'departmentId', as: 'instructors' });
Instructor.belongsTo(Department, { foreignKey: 'departmentId', as: 'dept' });

// Instructor -> Courses
Instructor.hasMany(Course, { foreignKey: 'instructorId', as: 'courses' });
Course.belongsTo(Instructor, { foreignKey: 'instructorId', as: 'instructor' });

// Student <-> Courses
Student.belongsToMany(Course, { through: 'StudentCourses', foreignKey: 'studentId', as: 'courses' });
Course.belongsToMany(Student, { through: 'StudentCourses', foreignKey: 'courseId', as: 'students' });

// Class -> Course
Class.belongsTo(Course, { foreignKey: 'course_id', as: 'course' });
Course.hasMany(Class, { foreignKey: 'course_id', as: 'classes' });

// Class -> Instructor
Class.belongsTo(Instructor, { foreignKey: 'instructor_id', as: 'instructor' });
Instructor.hasMany(Class, { foreignKey: 'instructor_id', as: 'classes' });

module.exports = { Student, Course, Instructor, Department, Class };
