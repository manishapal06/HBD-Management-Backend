const express = require('express');
const router = express.Router();
const oauthController = require('../../controllers/auth/oauthController');

router.get('/google', oauthController.googleAuth);
router.get('/google/callback', oauthController.googleCallback);

module.exports = router;
