const { AppError } = require('../../utils/logger/errorLogger');

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError('Unauthorized access', 403));
        }
        next();
    };
};

module.exports = authorize;
