const nodemailer = require('nodemailer');
const path = require('path')
const hbs = require('nodemailer-express-handlebars');


const { host, port, user, pass} = require('../config/mail.json')

const transport = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass
  }
});





module.exports = transport;
