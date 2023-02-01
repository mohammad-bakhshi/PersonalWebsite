const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/', (req, res) => {

  const { name, email, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `name: ${name}\r\n ${subject}`,
    text: text
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error)
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).redirect('/')
    }
  });
})




module.exports = router;