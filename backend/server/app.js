const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const passport = require('passport');
const session = require('express-session')
const flash = require('connect-flash')



const user = require("./app/models/user.js")
const userService = require('./service/userService')
const middleware = require('./app/middleware/connection')
require("./database/index")  

    app.use(session({
        secret: "tutoriaempares",
        resave: true,
        saveUninitialized: true,
    }));
    app.use(flash())

    new middleware(app)
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json())


    app.use(cors())
    
    new user()

    this.userService = new userService(app)



    


    const PORT = 3000
    app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))

       
    

