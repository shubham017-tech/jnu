const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/db");

const StudentMarksAttendance = sequelize.define("student_marks_attendance", {
    studentId: {
        type: DataTypes.INTEGER,
        // Note: Relationships will be defined separately
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marks: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    attendance: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: true
});

module.exports = StudentMarksAttendance;