import { useEffect, useState } from "react";
import "./StudentDashboard.css";
import axios from "axios";
// import students from "../assets/students";

const StudentDashboard = () => {
  const [Students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // `https://jsonplaceholder.typicode.com/users`
      try {
        const response = axios.get();
        setStudents((await response).data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  console.log(showstudents);

  return (
    <div className="dasboard">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <h2>eduVerse</h2>
            <i className="fa-solid fa-bars" />
          </div>
          <div className="actions">
            <div className="actions-icons">
              <i className="fas fa-user" />
              <i className="fa-solid fa-bell" />
            </div>
            <div className="schoolprofile">
              <img src="" alt="" />
              <h3>Name of School</h3>
            </div>
          </div>
        </div>

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
                  <h3>Students</h3>
                  <i className="fas fa-home" />
                </div>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Students..."
                />
              </div>
              <div className="table-contain">
                <h4>All Students List</h4>
                {/* Controls */}
                <div className="controls">
                  <button className="btn-add">
                    <i className="fas fa-plus" /> Add New
                  </button>
                </div>
                {/* Table */}
                <div className="table-container">
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Date of Birth</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <table>
                    <tbody>
                      {/* Example Rows */}
                      <tr>
                        <td> </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <button className="btn-edit">
                            <i className="fas fa-pen" />
                          </button>
                          <button className="btn-delete">
                            <i className="fas fa-trash" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
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

export default StudentDashboard;
