const express = require("express");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const bodyParser = require('body-parser')
const fs = require("fs");

var app = express();

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));


app.listen(PORT,()=>{
  console.log("server start up!");
})
