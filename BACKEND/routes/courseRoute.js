const express = require('express');
const router = express.Router();

// Import controllers
const CourseController = require('../controllers/courseController');

// Create a new course
router.post('/create-course', CourseController.createCourse);

// Get all courses
router.get('/courses', CourseController.getAllCourses); 

// Get a course by ID
router.get('/course/:id', CourseController.getCourseById);

// Update a course by ID
router.put('/update-course/:id', CourseController.updateCourse);

// Delete a course by ID (if you implemented this in the controller)
router.delete('/delete-course/:id', CourseController.deleteCourse);

module.exports = router;