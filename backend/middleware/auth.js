const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').split(' ')[1]; // Assuming 'Authorization' header with 'Bearer token' format
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id); // Fetch the user based on decoded ID
        next();
    } catch (error) {
        res.status(401).send({ error: 'Authentication failed' });
    }
};

module.exports = auth;
