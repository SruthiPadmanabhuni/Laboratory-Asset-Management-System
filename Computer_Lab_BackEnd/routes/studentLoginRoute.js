const express = require('express');
const router = express.Router();

const { getStudent, changePassword, sendEamil} = require('../controllers/studentLoginController');

router.route('/:username').get(getStudent);
router.route('/:username').put(changePassword);
router.route('/forgotPassword/:username').get(sendEamil);

module.exports = router;