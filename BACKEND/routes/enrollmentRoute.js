const express = require('express')

const router = express.Router();

//import controllers
const enrollmentController = require('../controllers/enrollmentController');


// create a new enrollment 
router.post('/create-enrollment', enrollmentController.createEnrollment);

//fina all enrollments
router.get('/enrollments', enrollmentController.getAllEnrollments);

//update enrollment
router.put('/update-enrollment/:id', enrollmentController.updateEnrollment);

//delete enrollment
router.delete('/delete-enrollment/:id', enrollmentController.deleteEnrollment);

// //update students
// router.put('/update-student/:id', StudentController.updateStudent);


module.exports = router;