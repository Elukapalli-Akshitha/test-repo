
const { User } = require('./models');

const isAdmin = async (req, res, next) => {
  const { id } = req.user;
  try {
    const user = await User.findByPk(id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

const isTeacher = async (req, res, next) => {
  const { id } = req.user;
  try {
    const user = await User.findByPk(id);
    if (!user || user.role !== 'teacher') {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { isAdmin, isTeacher };
