// IMPORTS
const express = require("express");

const authMiddleware = require('../middleware/auth');

const Tutoria = require('../models/tutoria')

const router = express.Router();
// MIDDLEWARE
router.use(authMiddleware);
// READ
router.get('/' , async (req, res) => {
  try {
    const tutorias = await Tutoria.find().populate(['user'])

    return res.send({ tutorias })
  } catch (err) {
    return res.status(400).send({error: "Erro ao carregar as tutorias"})
  }
})

router.get('/:tutoriaId', async (req, res) => {
  try {
    const tutorias = await Tutoria.findById(req.params.tutoriaId).populate(['user'])

    return res.send({ tutorias })
  } catch (err) {
    return res.status(400).send({error: "Erro ao carregar as tutorias"})
  }
})
// CREATE
router.post('/' , async (req, res) => {
    try {
        const { institution, discipline, content} = req.body

        const tutorias = await Tutoria.create({institution, discipline, content, user: req.userId})
        if(!tutorias)
          throw {
            message_log: 'Falha ao criar uma tutoria',
            status: 403,
            message_client: 'Falha ao criar uma tutoria'
          }

        return res.send({ tutorias })
    } catch (err) {
        return res.status(err.status).send(err.message_client)
    }
})
// UPDATE
router.put('/:tutoriaId', async (req, res) => {
    try {

      console.log(req.params.tutoriaId)
      const tutorias = await Tutoria.findByIdAndUpdate(req.params.tutoriaId , req.body)


        return res.send({ tutorias })
    } catch (err) {
        return res.status(400).send({error: "Erro ao atualizar uma nova tutoria"})
    }
})
// DELETE
router.delete('/:tutoriaId', async (req, res) => {
    try {
        await Tutoria.findByIdAndRemove(req.params.tutoriaId)

        return res.send()
    } catch (err) {
        return res.status(400).send({error: "Delete tutoria"})
    }
})

// PAGINATION

const limit = 10
router.get("/pagination/:pageId", async (req, res) => {
  try {
    const page = req.params.pageId
    const count = await Tutoria.find()
    .where('status').equals('Aguardando')
    .count()

    const data = await Tutoria.find()
    .select({})
    .where('status').equals('Aguardando')
    .limit(limit)
    .skip((page * limit) - limit)
    .populate(['user'])



    return res.send({ data, count })
  } catch (err) {
    res.status(500).send({error: "Erro na pagination"})
  }
})
router.get("/agendado/:pageId", async (req, res) => {
  try {
    const page = req.params.pageId
    const count = await Tutoria.find()
    .where('status').equals('Agendado')
    .count()

    const data = await Tutoria.find()
    .select({})
    .where('status').equals('Agendado')
    .limit(limit)
    .skip((page * limit) - limit)
    .populate(['user'])



    return res.send({ data, count })
  } catch (err) {
    res.status(500).send({error: "Erro na pagination"})
  }
})

// Dashboard inteiro separado
router.get("/dashboard/:dashId", async (req, res) => {
  try {
    const id = req.params.dashId

    const response = await Tutoria.findByIdAndUpdate(id)

    return res.send({ response })
  } catch (err) {
    res.status(500).send({error: "Erro na pagination"})
  }
})



module.exports = app => app.use("/tutorias", router);
