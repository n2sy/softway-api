const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader) {
        const error = new Error("Not authenticated !");
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, "supersupersecretcode");

    }
    catch(err) {
        throw err;
    }
    if(!decodedToken) {
        const error = new Error("Token expired !");
        error.statusCode = 401;
        throw error;
    }
    next();
}