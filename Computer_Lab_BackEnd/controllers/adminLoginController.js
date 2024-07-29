const asyncHandler = require('express-async-handler')
const adminCreds = require('../models/adminCredsModel')

const getAdmin = asyncHandler(async(req,res) => {
    const username = req.params.username;
    const admin = await adminCreds.getAdmin(username);
    res.json(admin);
});


module.exports = {getAdmin}