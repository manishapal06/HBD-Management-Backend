const express = require('express');
const router = express.Router();
const prescriptionController = require('../../controllers/hospital/prescriptionController');
const { validatePrescription } = require('../../middleware/validation/prescriptionValidation');

router.post('/', validatePrescription, prescriptionController.createPrescription);
router.get('/', prescriptionController.getPrescriptions);

module.exports = router;
