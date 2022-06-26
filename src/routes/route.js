const express = require('express');
const logger = require('../modules/logger');
const helper = require('../util/helper');
const formatter = require('../validator/formatter');
//const lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
  logger.welcome();
  helper.date();
  helper.month();
  formatter.trim();
  formatter.upperCase();
  formatter.lowerCase();

  //helper.info();

  res.send('My first API');
});



module.exports = router;
//module.exports = lodash;
