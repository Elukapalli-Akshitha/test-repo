
const express = require('express');
const { authenticateUser } = require('./authMiddleware');
const { College, User, Student, StudentMarks } = require('./models');

const router = express.Router();

// College Routes
router.get('/colleges', authenticateUser, async (req, res) => {
  try {
    const colleges = await College.findAll();
    res.json(colleges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// User Routes
router.get('/users', authenticateUser, async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Student Routes
router.get('/students', authenticateUser, async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Student Marks Routes
router.get('/student-marks', authenticateUser, async (req, res) => {
  try {
    const studentMarks = await StudentMarks.findAll();
    res.json(studentMarks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
