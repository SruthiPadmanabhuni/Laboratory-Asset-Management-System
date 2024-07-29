const asyncHandler = require('express-async-handler');
const Student_creds = require('../models/student_creds_model');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'padmanabhunisurya9346@gmail.com',
      pass: 'iwsvwatxmnklhkhl',
    },
  });

const mailing = async (email,password) => {
    try {
        const mailOptions = {
            from: 'padmanabhunisurya9346@gmail.com',
            to: email,
            subject: 'Automated Email',
            text: 'Your password is ' + password + '.',
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.messageId);
    }
    catch (error) {
        console.error('Error sending email: ', error);
    }
};

const getStudent = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const student = await Student_creds.getStudent(username);

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    res.json(student);
});

const sendEamil = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const student = await Student_creds.getStudent(username);

    if (!student) {
        res.status(404);
        throw new Error('Student not found');
    }

    let email = '';
    if(username.slice(3,5)==='21')
    {
        email = username.slice(3,5) + '211a' + username.slice(5,9) + '@bvrit.ac.in';
    }
    else if(username.slice(3,5)==='22')
    {
        email = username.slice(3,5) + '215a' + username.slice(5,9) + '@bvrit.ac.in';
    }

    mailing(email,student.password);

    res.json("Email sent");
});

const changePassword = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const password = req.body.password;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+]).{6,}$/;
    if (!passwordRegex.test(password)) {
        res.status(400);
        throw new Error('Password should be atleast 6 characters long and should contain atleast one uppercase, one lowercase, one number and one special character');
    }

    const student = await Student_creds.changePassword(username, password);
    res.json(student);
});

module.exports = {getStudent, changePassword, sendEamil};