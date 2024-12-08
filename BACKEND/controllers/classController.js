const Class = require("../models/class");

class ClassController {
  // Create a new class
  static async createClass(request, response) {
    try {
      const { className, semester, schedule } = request.body;

      // Validate input fields
      if (className === "" && semester === "" && schedule === "") {
        response.status(400).json({ message: "All fields are required." });
      } else {
        // Create a new class
        const newClass = await Class.create({
          className,
          semester,
          schedule,
        });

        response.status(201).json({
          message: "Class created successfully.",
          class: newClass,
        });
      }
    } catch (error) {
      console.error("Error creating class:", error);
      return response.status(500).json({ message: "Internal server error." });
    }
  }

  // Get all classes
  static async getAllClasses(request, response) {
    try {
      const classes = await Class.findAll();
      response.status(200).json(classes);
    } catch (error) {
      console.error("Error fetching classes:", error);
      response.status(500).json({ message: "Internal server error." });
    }
  }

  // Get a class by ID
  static async getClassById(request, response) {
    const classId = parseInt(request.params.id);

    try {
      const classItem = await Class.findByPk(classId);

      if (!classItem) {
        response
          .status(404)
          .json({ message: `Class with ID ${id} not found.` });
      }

      response.status(200).json(classItem);
    } catch (error) {
      console.error("Error fetching class by ID:", error);
      response.status(500).json({ message: "Internal server error." });
    }
  }

  // Update a class
  static async updateClass(request, response) {
    const classId = parseInt(request.params.id);
    const { className, semester, schedule } = request.body;

    try {
      const classItem = await Class.findByPk(classId);

      if (!classItem) {
        response
          .status(404)
          .json({ message: `Class with ID ${id} not found.` });
      } else {
        // update class details
        (classItem.className = className),
          (classItem.semester = semester),
          (classItem.schedule = schedule),
          await classItem.save();

        response.status(200).json({
          message: "Class updated successfully.",
          classItem,
        });
      }
    } catch (error) {
      console.error("Error updating class:", error);
      return response.status(500).json({ message: "Internal server error." });
    }
  }

  // Delete a class
  static async deleteClass(request, response) {
    const classId = parseInt(request.params.id);

    try {
      const classItem = await Class.findByPk(classId);

      if (!classItem) {
        response
          .status(404)
          .json({ message: `Class with ID ${id} not found.` });
      } else {
        // Delete the class
        await classItem.destroy();

        response.status(200).json({ message: "Class deleted successfully." });
      }
    } catch (error) {
      console.error("Error deleting class:", error);
      return response.status(500).json({ message: "Internal server error." });
    }
  }
}

module.exports = ClassController;