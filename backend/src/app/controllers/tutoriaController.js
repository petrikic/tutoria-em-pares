// IMPORTS
const express = require("express");

const authMiddleware = require('../middleware/auth');
const TutoriaBusiness = require('../business/tutoriaBusiness');

const Tutoria = require('../models/tutoria')
const User = require('../models/user')

const router = express.Router();
// MIDDLEWARE
router.use(authMiddleware);
// READ
router.get('/', async (req, res) => {
  try {
    const tutorias = await Tutoria.find().where('oferecida', false).populate(['user'])
    return res.send({ tutorias })
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar as tutorias" })
  }
})
router.get('/getTutoriasOferecidas', async (req, res) => {
  try {
    const tutorias = await Tutoria.find().where('oferecida', true).populate(['tutor'])

    return res.send({ tutorias })

  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar as tutorias" })
  }
})

router.get('/:tutoriaId', async (req, res) => {
  try {
  
    const tutorias = await Tutoria.findById(req.params.tutoriaId).populate(['user'])

    return res.send({ tutorias })
  } catch (err) {
    return res.status(400).send({ error: "Erro ao carregar as tutorias" })
  }
})



// CREATE

router.post('/', async (req, res) => {
  try {
    const {  data, oferecida, institution, discipline, content } = req.body

    var tutorias;
    
    if (oferecida) {
      tutorias = await Tutoria.create({ data, oferecida, institution, discipline, content, tutor: req.userId })
    }
    else {
      tutorias = await Tutoria.create({ oferecida, institution, discipline, content, user: req.userId })
    }

    if (!tutorias)
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
router.put('/putTutoriaOferecida/:tutoriaId', async (req, res) => {
  try {
     const tutoria = await Tutoria.findById(req.params.tutoriaId)
     const aluno = await User.findById(req.userId);
     
     if (await TutoriaBusiness.validaNovoAluno(tutoria, aluno)) {
      
       return res.send({ tutoria });
     }   
    return ({error:"Erro ao incluir aluno"})  
  } catch (err) {
    return res.status(400).send({ error: "Erro ao atualizar uma nova tutoria" })
  }
})

router.put('/:tutoriaId', async (req, res) => {
  try {

    const tutorias = await Tutoria.findByIdAndUpdate(req.params.tutoriaId, req.body)
    return res.send({ tutorias });

  } catch (err) {
    return res.status(400).send({ error: "Erro ao atualizar uma nova tutoria" })
  }
})
// DELETE
router.delete('/:tutoriaId', async (req, res) => {
  try {
    await Tutoria.findByIdAndRemove(req.params.tutoriaId)

    return res.send()
  } catch (err) {
    return res.status(400).send({ error: "Delete tutoria" })
  }
})



module.exports = app => app.use("/tutorias", router);
