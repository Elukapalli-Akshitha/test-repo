const express = require('express');
const { authenticateUser } = require('./authMiddleware');
const { isAdmin, isTeacher } = require('./roleMiddleware');
const { College, User, Student, StudentMarks } = require('./models');

const router = express.Router();

// Create a new college
router.post('/colleges', authenticateUser, isAdmin, async (req, res) => {
  try {
    const college = await College.create(req.body);
    res.status(201).json(college);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Create a new user
router.post('/users', authenticateUser, isAdmin, async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});



module.exports = router;
