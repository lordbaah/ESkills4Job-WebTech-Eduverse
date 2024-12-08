import "./StudentDashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseForm from "../components/CourseForm";

const CourseDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios.get(`http://localhost:8000/api/v1/courses`);
        setCourses((await response).data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  //   console.log(courses);

  //   delete course
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/delete-course/${id}`);
      console.log("course deleted:", id);
      setCourses(courses.filter((course) => course.course_id !== id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <h2>eduVerse</h2>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="actions">
            <div className="actions-icons">
              <i className="fas fa-user"></i>
              <i className="fa-solid fa-bell"></i>
            </div>
            <div className="schoolprofile">
              <img src="" alt="" />
              <h3>Name of School</h3>
            </div>
          </div>
        </div>

        <CourseForm />

        <div className="container-body">
          <div className="left-sidebar">
            <h3>Menu</h3>
            <div className="controls">
              <ul>
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">Instructors</a>
                </li>
                <li>
                  <a href="">Students</a>
                </li>
                <li>
                  <a href="">Courses</a>
                </li>
                <li>
                  <a href="">Classes</a>
                </li>
                <li>
                  <a href="">Departments</a>
                </li>
                <li>
                  <a href="">Employees</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-body">
            <div className="main-container">
              <div className="search-classes">
                <div className="search-actions">
                  <h3>Courses</h3>
                  <i className="fas fa-home"></i>
                </div>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Courses..."></input>
              </div>
              <div className="table-contain">
                <h4>All Courses List</h4>

                {/* <div className="controls">
                  <button className="btn-add">
                    <i className="fas fa-plus"></i> Add New
                  </button>
                </div> */}

                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Course Description</th>
                        <th>Credit Hours</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    {/* displaying course here */}
                    {courses.map((course) => {
                      const {
                        course_id,
                        course_name,
                        course_description,
                        credit_hours,
                      } = course;
                      return (
                        <tbody key={course_id}>
                          <tr>
                            <td>{course_id}</td>
                            <td>{course_name}</td>
                            <td>{course_description}</td>
                            <td>{credit_hours}</td>
                            <td>
                              <button className="btn-edit">
                                <i className="fas fa-pen"></i>
                              </button>
                              <button
                                className="btn-delete"
                                onClick={() => deleteStudent(course_id)}>
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDashboard;
