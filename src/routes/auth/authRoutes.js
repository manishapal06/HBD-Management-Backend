const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth/authController');
const { validateLogin } = require('../../middleware/validation/authValidation');

router.post('/login', validateLogin, authController.login);
router.post('/register', authController.register);

module.exports = router;
