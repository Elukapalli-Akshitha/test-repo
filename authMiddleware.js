
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('./models');

const secretKey = '96e9aa40e763cfcdcd9596f41a8f0ff4960a0265ff6dd431aa90d349cd3e3953';

const generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: '1h' });
};

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

const comparePasswords = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = { generateToken, authenticateUser, hashPassword, comparePasswords };
