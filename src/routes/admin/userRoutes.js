const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin/userController');
const { validateUser } = require('../../middleware/validation/userValidation');

router.post('/', validateUser, userController.createUser);
router.get('/', userController.getUsers);

module.exports = router;
