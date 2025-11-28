const { body } = require('express-validator');

exports.validatePrescription = [
    body('patientId').notEmpty(),
    body('medications').isArray()
];
