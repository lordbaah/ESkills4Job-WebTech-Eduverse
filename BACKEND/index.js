const express = require("express");
const cors = require("cors");

// relationships in models
const {
  Students,
  Courses,
  Instructors,
  Enrollments,
  Class,
  Departments,
} = require("./models/relationships");

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
};

// get all routes from studentRoutes
const studentRoutes = require("./routes/studentRoute");
const instructorRoutes = require("./routes/instructorRoute");
const courseRoutes = require("./routes/courseRoute");
const departmentRoutes = require("./routes/departmentRoute");
const enrollmentRoutes = require("./routes/enrollmentRoute");
const classRoutes = require("./routes/classRoute");

// import database connection
const sequelize = require("./database");

// import all models
const Student = require("./models/students");
const Department = require("./models/department");
const Course = require("./models/courses");
const Enrollment = require("./models/enrollment");
const Instructor = require("./models/instructor");

const server = express();

// body parser middleware
server.use(cors(corsOptions));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// endpoint to get student routes
server.use("/api/v1", studentRoutes);
server.use("/api/v1", instructorRoutes);
server.use("/api/v1", courseRoutes);
// server.use('/api/v1', departmentRoutes);
server.use("/api/v1", enrollmentRoutes);
server.use("/api/v1", classRoutes);

sequelize
  .sync({ alter: true })
  // .sync({ force: true })
  .then((result) => {
    console.log("Database synced successfully");
  })
  .catch((error) => {
    console.log("Error syncing database", error);
  });

server.listen(8000, () => {
  console.log("Server listening on port 8000");
});
