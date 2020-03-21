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

        const tutorias = await Tutoria.create({ institution, discipline, content, user: req.userId})
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
      const {institution, discipline, content} = req.body
      console.log(req.params.tutoriaId)
      const tutorias = await Tutoria.findByIdAndUpdate(req.params.tutoriaId ,
        {
        institution,
        discipline,
        content
        })


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



module.exports = app => app.use("/tutorias", router);
