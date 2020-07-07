const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.base);

router.post('/update', adminController.update);

// router.post('/daily-stats', adminController.dailyStats);

module.exports = router;
