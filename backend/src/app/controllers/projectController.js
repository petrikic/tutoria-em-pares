// IMPORTS
const express = require("express");

const authMiddleware = require('../middleware/auth');

const Project = require('../models/project')
const Task = require('../models/task')


const router = express.Router();
// MIDDLEWARE
router.use(authMiddleware);
// READ
router.get('/' , async (req, res) => {
  try {
    const projects = await Project.find().populate(['user', ['tasks']])

    return res.send({ projects })
  } catch (err) {
    return res.status(400).send({error: "Erro ao carregar os projetos"})
  }
})

router.get('/:projectId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId).populate(['user', ['tasks']])

    return res.send({ project })
  } catch (err) {
    return res.status(400).send({error: "Erro ao carregar os projetos"})
  }
})
// CREATE
router.post('/' , async (req, res) => {
    try {
        const { title, description, tasks} = req.body

        const project = await Project.create({ title, description, user: req.userId})

        await Promise.all(tasks.map( async tasks => {
            const projectTask = new Task({ ...tasks, project: project._id }).populate('user')

            await projectTask.save()

            project.tasks.push(projectTask)

        }))

        await project.save()



        return res.send({ project })
    } catch (err) {
        console.log(err)
        return res.status(403).send({error: "Erro ao criar um novo projeto"})
    }
})
// UPDATE
router.put('/:projectId', async (req, res) => {
    try {
      const {title, description, tasks} = req.body

      const project = await Project.findByIdAndUpdate(req.params.projectId ,
        {
        title,
        description
        })

      project.tasks = []
      await Task.deleteOne({project: req.params.projectId})



      await Promise.all(tasks.map( async tasks => {
        const projectTask = new Task({ ...tasks, project: req.params.projectId })

        await projectTask.save()

        project.tasks.push(projectTask)

      }))

        await project.save()

        return res.send({ project })
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: "Erro ao atualizar um novo projeto"})
    }
})
// DELETE
router.delete('/:projectId', async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.projectId)

        return res.send()
    } catch (err) {
        return res.status(400).send({error: "Delete project"})
    }
})



module.exports = app => app.use("/projects", router);
