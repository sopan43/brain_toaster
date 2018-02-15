var express = require('express');
var bodyParser = require('body-parser');
var PORT = 3000 || PORT;
var app = express();

var question = require('./route/question.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/brain_toster', question);

app.listen(PORT, () => {
    console.log('Connection Established At PORT:', PORT);
});