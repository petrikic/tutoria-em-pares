const nodemailer = require('nodemailer');
const path = require('path')
const hbs = require('nodemailer-express-handlebars')


const { host, port, user, pass} = require('../config/mail.json')

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user,pass}
});

const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: './src/resources/mail/',
    layoutsDir: './src/resources/mail/',
    defaultLayout: 'email.body.hbs',
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.hbs',
};

module.exports = transport;
