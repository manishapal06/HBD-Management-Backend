const jwt = require('jsonwebtoken');
const { AppError } = require('../../utils/logger/errorLogger');

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) throw new AppError('Authentication required', 401);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        next(new AppError('Invalid token', 401));
    }
};

module.exports = authenticate;
