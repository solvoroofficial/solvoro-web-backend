const jwt = require('jsonwebtoken');

function auth(role = null) {
  return (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (role && decoded.role !== role) return res.status(403).json({ message: 'Forbidden' });
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
}

module.exports = auth;
