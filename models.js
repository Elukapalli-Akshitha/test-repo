
const { DataTypes } = require('sequelize');
const db = require('./database');

const College = db.define('College', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  campus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('super_admin', 'admin', 'teacher', 'student'),
    allowNull: false,
  },
});

const Student = db.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const StudentMarks = db.define('StudentMarks', {
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define associations
College.hasMany(User);
User.belongsTo(College);
User.hasOne(Student);
Student.belongsTo(User);
Student.hasMany(StudentMarks);
StudentMarks.belongsTo(Student);

module.exports = { College, User, Student, StudentMarks };
