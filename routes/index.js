const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Personal Website' });
});

router.get('/download', function (req, res) {
  const file = path.join(__dirname, "../public/data/MohammadBakhshi_Resume.pdf");
  res.download(file);
});

module.exports = router;
