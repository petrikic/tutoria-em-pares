const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const passport = require('passport');
const user = require("./models/user.js")
const userService = require('./service/userService')
const admin = require("./routes/admin")
const aluno = require("./routes/aluno")
require("./config/ConnectionFactory")  

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(cors())
 
new user()

this.userService = new userService(app)

app.use('/admin', admin);
app.use('/aluno', aluno);

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))

       
    

