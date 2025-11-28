const { body } = require('express-validator');

exports.validateLogin = [
    body('email').isEmail(),
    body('password').exists()
];
