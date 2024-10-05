const jwt = require('jsonwebtoken');
const Webmaster = require('../models/Webmaster');

// Static JWT Secret
const JWT_SECRET = 'webmastertarun';

const authWebmaster = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract token from header
      token = req.headers.authorization.split(' ')[1];

      // Decode token and find webmaster
      const decoded = jwt.verify(token, JWT_SECRET);
      req.webmaster = await Webmaster.findById(decoded.id).select('-password');

      // Check if the user is a webmaster
      if (req.webmaster.role !== 'webmaster') {
        return res.status(401).json({ message: 'Not authorized as webmaster' });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = authWebmaster;
