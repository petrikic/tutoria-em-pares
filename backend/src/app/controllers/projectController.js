const express = require("express");

const authMiddleware = require('../middleware/auth');

const Project = require('../models/project')
const Task = require('../models/task')


const router = express.Router();

router.use(authMiddleware);

router.post('/' , async (req, res) => {
    try {
        const project = await Project.create(req.body)

        return res.send({ project })
    } catch (err) {
        return res.status(400).send({error: "Erro ao criar um novo projeto"})
    }
})
router.get('/' , async (req, res) => {
    res.send({user : req.userId });
})

router.get('/:projectId', async (req, res) => {
    res.send({ user: req.userId})
})


router.put('/:projectId', async (req, res) => {
    res.send({ user: req.userId})
})

router.delete('/:projectId', async (req, res) => {
    res.send({ user: req.userId})
})



module.exports = app => app.use("/projects", router);