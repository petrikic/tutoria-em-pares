// Configuracoes do servidor
    // Importando o express
    const express = require("express");

    // Instanciando o express
    const app = express();

    // Importando o cors 
    const cors = require("cors")

    // Importando o mongoose
    const mongoose = require("mongoose");

    // Importando o body-parser
    const bodyParser = require('body-parser')

    // Importando o passport
    const passport = require('passport');

    // Importando a model para criar as colletions do banco
    const user = require("./models/user.js")

    // Chamando a API do crud
    const userService = require('./service/userService')

    // Importando os routes
    const admin = require("./routes/admin")
    const aluno = require("./routes/aluno")

    // Importando o banco de dados
    require("./config/ConnectionFactory")  

   
    //Configuracoes do sistema
        // Transformando as chamadas em json
        app.use(bodyParser.urlencoded({ extended: true}))
        app.use(bodyParser.json())

        // Iniciando o cors
        app.use(cors())

        // Importando a model para criar as colletions do banco
        new user()

        // Chamando a API do crud
        this.userService = new userService(app)



    // Rotas
        app.use('/admin', admin);

        app.use('/aluno', aluno);

        // Instanciando o servidor
        const PORT = 3000
        app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))

       
    

