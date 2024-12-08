const Student = require('../models/students');

class StudentController {
  // Create a new student
	static async createStudent(req, res) {
		try {
			const { first_name, last_name, dob, email } = req.body;

			if (!first_name || !last_name || !dob || !email) {
				return res.status(400).json({ message: 'All fields are required.' });
			}

			const newStudent = await Student.create({
				first_name,
				last_name,
				dob,
				email,
			});

			res.status(201).json({
				message: 'Student created successfully!',
				student: newStudent,
			});
		} catch (error) {
			console.error('Error creating student:', error);
			res.status(500).json({ message: 'Internal server error.' });
		}
	}

	// Get all students
	static async getAllStudents(req, res) {
		try {
			const students = await Student.findAll();

			res.status(200).json({
				message: 'Students retrieved successfully!',
				students,
			});
		} catch (error) {
			console.error('Error fetching students:', error);
			res.status(500).json({ message: 'Internal server error.' });
		}
	}

	// Get a student by ID
	static async getStudentById(req, res) {
		try {
			const { id } = req.params;

			const student = await Student.findByPk(id);

			if (!student) {
				return res.status(404).json({ message: 'Student not found.' });
			}

			res.status(200).json({
				message: 'Student retrieved successfully!',
				student,
			});
		} catch (error) {
			console.error('Error fetching student:', error);
			res.status(500).json({ message: 'Internal server error.' });
		}
	}

	// Update a student
	static async updateStudent(req, res) {
		try {
			const { id } = req.params;
			const { first_name, last_name, date_of_birth, email } = req.body;

			const student = await Student.findByPk(id);

			if (!student) {
				return res.status(404).json({ message: 'Student not found.' });
			}

			student.first_name = first_name || student.first_name;
			student.last_name = last_name || student.last_name;
			student.date_of_birth = date_of_birth || student.date_of_birth;
			student.email = email || student.email;

			await student.save();

			res.status(200).json({
				message: 'Student updated successfully!',
				student,
			});
		} catch (error) {
			console.error('Error updating student:', error);
			res.status(500).json({ message: 'Internal server error.' });
		}
	}

	// Delete a student
	static async deleteStudent(request, response) {
		try {
			const { id } = request.params;

			const student = await Student.findByPk(id);

			if (!student) {
				return response.status(404).json({ message: 'Student not found.' });
			}

			await student.destroy();

			response.status(200).json({
				message: 'Student deleted successfully!',
			});
		} catch (error) {
			console.error('Error deleting student:', error);
			response.status(500).json({ message: 'Internal server error.' });
		}
	}
}

module.exports = StudentController;
