// IMPORTS
const express = require("express");

const authMiddleware = require('../middleware/auth');

const Tutor = require('../models/tutor')

const router = express.Router();
// MIDDLEWARE
router.use(authMiddleware);
// READ
router.get('/' , async (req, res) => {
  try {
    const tutor = await Tutor.find().populate(['user'])

    return res.send({ tutor })
  } catch (err) {
    return res.status(400).send({error: "Erro ao carregar os tutor"})
  }
})

router.get('/:tutorId', async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.tutorId).populate('user')

    return res.send({ tutor })
  } catch (err) {
    return res.status(400).send({error: "Erro ao carregar os tutor"})
  }
})
// CREATE
router.post('/' , async (req, res) => {
    try {
        const {institution, discipline, content, data } = req.body  
       
        const tutor = await Tutor.create({
          institution,
          discipline,
          content,
          data,
          user: req.userId
          })
        if(!tutor)
          throw {
            message_log: 'Falha ao criar um tutor',
            status: 403,
            message_client: 'Falha ao criar um tutor'
          }

        return res.send({ tutor })
    } catch (err) {
      console.log(err)
        return res.status(err.status).send(err.message_client)
    }
})
// UPDATE
router.put('/:tutorId', async (req, res) => {
    try {

      console.log(req.params.tutorId)
      const tutorias = await Tutor.findByIdAndUpdate(req.params.tutorId , req.body)


        return res.send({ tutor })
    } catch (err) {
        return res.status(400).send({error: "Erro ao atualizar uma nova tutoria"})
    }
})
// DELETE
router.delete('/:tutorId', async (req, res) => {
    try {
        await Tutor.findByIdAndRemove(req.params.tutorId)

        return res.send()
    } catch (err) {
        return res.status(400).send({error: "Delete tutor"})
    }
})



module.exports = app => app.use("/tutor", router);
