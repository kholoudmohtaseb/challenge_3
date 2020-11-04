
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/client'));

