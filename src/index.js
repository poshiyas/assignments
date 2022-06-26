const express = require('express');
var bodyParser = require('body-parser');
//const lodash = require("lodash");



const route = require('./routes/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);


app.listen(process.env.PORT || 3020, function () {
  console.log('Express app running on port ' + (process.env.PORT || 3020));
});
