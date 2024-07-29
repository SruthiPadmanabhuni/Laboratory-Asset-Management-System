const express = require('express');
const router = express.Router();

const { getAdmin } = require('../controllers/adminLoginController');

router.route('/:username').get(getAdmin);

module.exports = router;