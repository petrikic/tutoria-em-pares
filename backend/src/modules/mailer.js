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

const handlebarOptions = {
  viewEngine: {
    extName: '.html',
    partialsDir: './src/resources/mail/',
    layoutsDir: './src/resources/mail/',
  },
  viewPath: './src/resources/mail/',
  extName: '.html',
};


transport.use('compile', hbs(handlebarOptions));




module.exports = transport;
