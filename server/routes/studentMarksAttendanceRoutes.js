const express = require('express');
const { StudentMarksController, getStudentMarks } = require('../controllers/studentMarksResult');

const router = express.Router();


router.post('/add-student-marks-attendance', StudentMarksController);
router.get('/get-student-marks-attendance', getStudentMarks);

module.exports = router;
