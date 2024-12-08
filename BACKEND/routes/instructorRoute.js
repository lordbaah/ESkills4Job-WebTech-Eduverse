const express = require('express')

const router = express.Router();

// import controllers
const InstructorController = require('../controllers/instructorController')


// create a new student
router.post('/create-instructor/', InstructorController.createInstructor);

// to get all instructors
router.get('/instructor', InstructorController.getAllInstructors);

// to get instructor by Id
router.get('/instructor/:id', InstructorController.getInstructorById)

// to update insructor details
router.put('/update-instructor/:id', InstructorController.updateInstructor)

// to delete instuctor by Id
router.delete('/delete-instructor/:id', InstructorController.deleteInstructorById);

module.exports = router;  