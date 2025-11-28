const express = require('express');
const router = express.Router();
const reportController = require('../../controllers/hospital/reportController');

router.get('/daily', reportController.getDailyReport);

module.exports = router;
