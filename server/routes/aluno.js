const express = require("express");
const router = express.Router();

    router.get('/', (req, res) => {
        res.send('Rota principal dos alunos')
    })

    router.get('/posts', (req, res) => {
        res.send('Rota principal das materias dos alunos')
    })

    router.get('/categoria', (req, res) => {
        res.send('Rota principal das materias dos alunos')
    })

    router.get('/categoria/add', (req, res) => {
        res.send('Rota principal das materias dos alunos')
    })

module.exports = router