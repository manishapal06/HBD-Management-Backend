const express = require('express');
const router = express.Router();
const patientController = require('../../controllers/hospital/patientController');
const { validatePatient } = require('../../middleware/validation/patientValidation');

router.post('/', validatePatient, patientController.createPatient);
router.get('/', patientController.getPatients);

module.exports = router;
