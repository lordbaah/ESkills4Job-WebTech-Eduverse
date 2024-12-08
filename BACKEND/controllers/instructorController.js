// to import the instructor model
const Instructors = require('../models/instructor')

class InstructorController {
    // create new instructor
    static async createInstructor(request, response) {
        try {
            const { name, department, email } = request.body;

            // validate all fields
            if ( name === '' && department === '' && email === '') {
                response.status(400).json({message: "All field are required"})
            }

            const newInstructor = await Instructors.create({
                name,
                department,
                email
            });

            response.status(201).json({
                message: "Instructor created successfully",
                instructor: newInstructor
            })
        } catch (error) {
            console.log('Error creating Instructor', error);
            response.status(500).json({message: 'Internal server error.'})
        }
    }
       // to get all instructors
    static async getAllInstructors(request, response) {
        try {
            const instructors = await Instructors.findAll();
            response.status(200).json(instructors);
        } catch (error) {
            console.log('Error fetching all students', error);
            response.status(500).json({ message: "Internal server error."})
        }
    }

    // get instructor by id
    static async getInstructorById(request, response) {
        const instructor_id = parseInt(request.params.id);
        
        const instructor = await Instructors.findByPk(instructor_id);
        
        if(!instructor) {
            response.status(404).json({ message: `Instructor with id ${instructor_id} not found.`});
        } else {
            response.json(instructor);
        }
    }

    // update instructor details
    static async updateInstructor(request, response) {
        try {
            const instructor_id = parseInt(request.params.id);
            const {name, department, email } = request.body;

            const instructor = await Instructors.findByPk(instructor_id)

            if (!instructor) {
                response.status(404).json({ message: `Instructor with id ${id} does not exist`})
            } else{
                
                // update instructor details
                instructor.name = name,
                instructor.department = department,
                instructor.email = email

                await instructor.save();

                response.status(200).json({
                    message: "Instructor updated successfully",
                    instructor
                })
            }
        } catch (error) {
            response.json({ message: "Internal server error"})
        }
    }

    // delete instructor by id
static async deleteInstructorById(request, response) {
    const instructor_id = parseInt(request.params.id); // Get the instructor ID from the request parameters

    // Validate the instructor ID
    if (isNaN(instructor_id)) {
        return response.status(400).json({ message: 'Invalid instructor ID.' });
    }

    try {
        const instructor = await Instructors.findByPk(instructor_id);

        // Check if the instructor exists
        if (!instructor) {
            return response.status(404).json({ message: `Instructor with id ${instructor_id} not found.` });
        } 
        
        // Delete the instructor
        await Instructors.destroy({
            where: { id: instructor_id }
        });

        // Send success response
        return response.status(204).send(); // No content response for successful deletion
    } catch (error) {
        console.error('Error deleting instructor:', error);
        return response.status(500).json({ message: 'Internal server error' });
    }
}
}

module.exports = InstructorController