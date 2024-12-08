//import enrollment model
const Enrollment = require('../models/enrollment');

//import associated models
//const Student = require('../models/students');
//const Course = require('../models/courses');

class enrollmentController {
    //create new enrollment
    static async createEnrollment(request, response) {
        try {
            const {enrollment_date, student_id, course_id} = request.body;
            //validate all fields
            if (enrollment_date === "" && student_id === "" && course_id === "") {
                return response.status(400).json({message: "All fields are required"});
            }
            //create new enrollment
            const newEnrollment = await Enrollment.create({
                enrollment_date,
                student_id,
                course_id
            });
            return response.status(201).json({message: "Enrollment created successfully",
                enrollment: newEnrollment
            })
        } catch (error) {
            console.log('Error creating enrollment, error');
            return response.status(500).json({message: 'Internal server error'})
            
        }
    }

    // get all enrollments
    static async getAllEnrollments(request, response) {
        try {
            const enrollments = await Enrollment.findAll();
            response.status(200).json(enrollments);
        } catch(error) {
            response.status(500).json({message: "Internal server error"})
        }
    }

    // update enrollment
    static async updateEnrollment(request, response) {
        try {
          const enrollment_id = parseInt(request.params.id, 10); // Parse ID to an integer
          const { enrollment_date, student_id, course_id } = request.body; // Destructure fields from body
      
          // Check if enrollment_id is valid
          if (!enrollment_id) {
            return response.status(400).json({ message: "Invalid enrollment ID" });
          }
      
          // Find the enrollment record by primary key which is the enrollment id
          const enrollment = await Enrollment.findByPk(enrollment_id);
      
          if (!enrollment) {
            return response.status(404).json({ message: `Enrollment with ID ${enrollment_id} does not exist` });
          }
      
          // Update only the provided fields
          if (enrollment_date) enrollment.enrollment_date = enrollment_date;
          if (student_id) enrollment.student_id = student_id;
          if (course_id) enrollment.course_id = course_id;
      
          // Save the updated record
          await enrollment.save();
      
          return response.status(200).json({
            message: "Enrollment updated successfully",
            enrollment,
          });
        } catch (error) {
          console.error("Error updating enrollment:", error);
          return response.status(500).json({ message: "Internal server error", error: error.message });
        }
      }


// Delete an enrollment by ID
static async deleteEnrollment(request, response) {
    const enrollmentId = request.params.id;

    try {
        // Find the enrollment by ID
        const enrollment = await Enrollment.findByPk(enrollmentId);

        if (!enrollment) {
            return response.status(404).json({ message: `Enrollment with ID ${enrollment_id} does not exist`});
        }

        // Delete the enrollment
        await enrollment.destroy();

        return response.status(200).json({ message: 'Enrollment deleted successfully' });
    } catch (error) {
        console.error('Error deleting enrollment:', error);
        return response.status(500).json({ message: 'Internal server error' });
    }
}
      
}

module.exports = enrollmentController;