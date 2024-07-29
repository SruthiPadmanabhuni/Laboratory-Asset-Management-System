const express = require('express');
const router = express.Router();

const {
    getStudentIssues,
    getPCissues,
    postIssue,
    updateIssue,
    updateToProgress
} = require('../controllers/issuesController');


router.route('/').post(postIssue);
router.route('/:username').get(getStudentIssues);
router.route('/:lab/:PC').get(getPCissues);
router.route('/update/:id/:status').put(updateIssue);
router.route('/updateToProgress/:id').put(updateToProgress);

module.exports = router;