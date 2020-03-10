const express = require("express");
const router = express.Router();


    router.get('/' , (req, res) => {
        res.send("Renderizando a pagina principal do admin");
    })

    router.get('/posts' , (req, res) => {
        res.send("Renderizando a pagina dos post do admin");
    })
    
    router.get('/categoria' , (req, res) => {
        res.send("Renderizando a pagina das materias do admin");
    })
    
    router.get('/categoria/add' , (req, res) => {
        res.send("Renderizando a pagina das categorias do admin");
    })
    

module.exports = router