
const express = require('express');
const router = express.Router();
const { createReminder } = require('../controllers/remainderControllers');

router.post('/create', createReminder);

module.exports = router;
