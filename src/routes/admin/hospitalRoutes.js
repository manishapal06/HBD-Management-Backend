const express = require('express');
const router = express.Router();
const hospitalController = require('../../controllers/admin/hospitalController');
const { validateHospital } = require('../../middleware/validation/hospitalValidation');
const authenticate = require('../../middleware/auth/authenticate');
const authorize = require('../../middleware/auth/authorize');

router.use(authenticate, authorize('SUPER_ADMIN'));

router.post('/', validateHospital, hospitalController.createHospital);
router.get('/', hospitalController.getHospitals);

module.exports = router;
