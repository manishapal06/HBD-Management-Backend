const { body } = require('express-validator');

exports.validateUser = [
    body('name').notEmpty(),
    body('email').isEmail()
];
