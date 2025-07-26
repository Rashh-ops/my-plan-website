// routes/planRoutes.js
const express = require('express');
const router = express.Router();
const { getHome, getPlanDetails } = require('../controllers/planController');

router.get('/', getHome);
router.get('/plan/:type', getPlanDetails);

module.exports = router;
