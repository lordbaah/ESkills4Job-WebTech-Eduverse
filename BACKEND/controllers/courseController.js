const Course = require('../models/courses'); // Assuming Course is the model

class CourseController {
    // Create new course
    static async createCourse(request, response) {
        try {
            const { course_name, course_description, credit_hours } = request.body;

            // Validate that all fields are provided and credit_hours is a positive number
            if (!course_name || !course_description || !credit_hours || isNaN(credit_hours) || credit_hours <= 0) {
                return response.status(400).json({ message: "All fields are required, and credit hours must be a positive number." });
            }

            const newCourse = await Course.create({
                course_name,
                course_description,
                credit_hours
            });

            response.status(201).json({
                message: "Course created successfully",
                course: newCourse
            });
        } catch (error) {
            console.error('Error creating course', error);
            response.status(500).json({ message: 'Internal server error.' });
        }
    }

    // Get all courses with optional pagination
    static async getAllCourses(request, response) {
        try {
            const limit = parseInt(request.query.limit) || 10;
            const offset = parseInt(request.query.offset) || 0;

            const courses = await Course.findAll({ limit, offset });
            response.status(200).json(courses);
        } catch (error) {
            console.error('Error fetching all courses', error);
            response.status(500).json({ message: "Internal server error." });
        }
    }

    // Get course by ID
    static async getCourseById(request, response) {
        try {
            const course_id = parseInt(request.params.id);
            if (isNaN(course_id)) {
                return response.status(400).json({ message: "Invalid course ID" });
            }

            const course = await Course.findByPk(course_id);

            if (!course) {
                return response.status(404).json({ message: `Course with id ${course_id} not found.` });
            }

            response.json(course);
        } catch (error) {
            console.error('Error fetching course by ID', error);
            response.status(500).json({ message: 'Internal server error.' });
        }
    }

    // Update course
    static async updateCourse(request, response) {
        try {
            const course_id = parseInt(request.params.id);
            if (isNaN(course_id)) {
                return response.status(400).json({ message: "Invalid course ID" });
            }

            const { course_name, course_description, credit_hours } = request.body;

            // Validate credit hours if provided
            if (credit_hours && (isNaN(credit_hours) || credit_hours <= 0)) {
                return response.status(400).json({ message: "Credit hours must be a positive number." });
            }

            const course = await Course.findByPk(course_id);

            if (!course) {
                return response.status(404).json({ message: `Course with id ${course_id} does not exist` });
            }

            // Update course details
            course.course_name = course_name || course.course_name;
            course.course_description = course_description || course.course_description;
            course.credit_hours = credit_hours || course.credit_hours;

            await course.save();

            response.status(200).json({
                message: "Course updated successfully",
                course
            });
        } catch (error) {
            console.error('Error updating course', error);
            response.status(500).json({ message: 'Internal server error.' });
        }
    }

    // Delete course
    static async deleteCourse(request, response) {
        try {
            const course_id = parseInt(request.params.id);
            if (isNaN(course_id)) {
                return response.status(400).json({ message: "Invalid course ID" });
            }

            const course = await Course.findByPk(course_id);

            if (!course) {
                return response.status(404).json({ message: `Course with id ${course_id} does not exist` });
            }

            await course.destroy();

            response.status(200).json({ message: "Course deleted successfully" });
        } catch (error) {
            console.error('Error deleting course', error);
            response.status(500).json({ message: 'Internal server error.' });
        }
    }
}

module.exports = CourseController;