const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const adminAuth = async (req, res, next) => {
  const token = req.header('auth-token');
  const JWT_SECRET = "Programmertarun";

  if (!token) {
    return res.status(401).json({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    const admin = await Admin.findById(data.id); // Assuming admin ID is stored in token
    if (!admin) {
      return res.status(403).json({ error: "Access denied" });
    }
    req.admin = admin; // Attach the admin object to the request
    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate using a valid token" });
  }
};

module.exports = adminAuth;
