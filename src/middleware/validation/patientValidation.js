const { body } = require('express-validator');

exports.validatePatient = [
    body('name').notEmpty(),
    body('age').isNumeric()
];
