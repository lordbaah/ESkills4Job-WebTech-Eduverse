import "./course.css";
import { useState, useEffect } from "react";
import axios from "axios";

const CourseForm = () => {
  // State to store the form data
  const [courseData, setcourseData] = useState({
    course_name: "",
    course_description: "",
    credit_hours: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setcourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  // Function to submit the form data using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/create-course`,
        courseData
      );
      console.log("course created:", response.data);
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <div>
      <div className="student-container">
        <h2>Add a New Course</h2>

        <form onSubmit={handleSubmit}>
          <div className="course-name">
            <label htmlFor="coursename">Course Name</label>
            <input
              onChange={handleChange}
              value={courseData.course_name}
              type="text"
              name="course_name"
              placeholder="Enter the Course Name"
              //   required=""
            />
          </div>

          <div className="course-description">
            <label htmlFor="text">Course Description</label>
            <input
              value={courseData.course_description}
              onChange={handleChange}
              type="text"
              name="course_description"
              placeholder="Enter the Course Description"
              required=""
            />
          </div>

          <label htmlFor="number">Credit Hours</label>
          <input
            onChange={handleChange}
            value={courseData.credit_hours}
            type="number"
            id="number"
            name="credit_hours"
            placeholder="Enter the Credit Hours"
            required=""
          />
          <button type="submit">Sumbit</button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
