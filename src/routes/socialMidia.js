const express = require('express');
const router = express.Router();

const socialMidiaController = require('../controller/socialMidiaController');

router.get('/', socialMidiaController.index);

module.exports = router;
