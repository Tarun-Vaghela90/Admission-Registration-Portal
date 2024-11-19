const jwt = require('jsonwebtoken');
const JWT_SECRET = 'webmastertarun'; // JWT secret key

const fetchWebmaster = (req, res, next) => {
    // Get the token from the header
    const token = req.header('authToken');
    if (!token) {
        return res.status(401).send({ error: 'Please authenticate using a valid token' });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.webmaster = data.webmaster;
        next();
    } catch (error) {
        return res.status(401).send({ error: 'Please authenticate using a valid token' });
    }
};

module.exports = fetchWebmaster;
