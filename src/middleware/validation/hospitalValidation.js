const { body } = require('express-validator');

exports.validateHospital = [
    body('name').notEmpty(),
    body('address').notEmpty()
];
