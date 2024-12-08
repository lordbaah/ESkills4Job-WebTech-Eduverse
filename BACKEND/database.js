// const mysql2 = require("mysql2");

// const pool = mysql2.createPool({
//     host: "localhost",
//     user: "root",
//     database: "school_management",
//     password: "root",
//     port: 3306
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("student_management", "root", "Start@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
