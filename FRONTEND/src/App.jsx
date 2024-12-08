import "./App.css";
import "./assets/fonts-6/css/all.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CourseDashboard from "./pages/CourseDashboard";
// import CourseForm from "./components/CourseForm";

function App() {
  // const [Courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // `https://jsonplaceholder.typicode.com/users`
  //   try {
  //     const response = axios.get(`http://localhost:8000/api/v1/courses`);
  //     setCourses((await response).data);
  //   } catch (error) {}
  // };

  // fetchData();
  // }, []);

  // console.log(Courses);

  return (
    <>
      {/* <div>
        <h1>List of Courses</h1>
        {Courses.map((course) => (
          <div key={course.course_id}>
            <p>{course.course_name}</p>
            <p>{course.course_description}</p>
          </div>
        ))}
      </div> */}
      <CourseDashboard />
      {/* <CourseForm /> */}
    </>
  );
}

export default App;
