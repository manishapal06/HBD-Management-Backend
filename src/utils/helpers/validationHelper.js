const { validationResult } = require('express-validator');

exports.validate = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new Error(errors.array()[0].msg);
    }
};
