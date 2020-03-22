const express = require('express')
const User = require('../models/user');


const router = express.Router()

router.get('/', async (req, res) => {
  try {

    const user = await User.find()

    return res.send({ user })
  } catch (err) {
    console.log(err)
    res.status(500).send({error: "Erro ao listar todos os usuarios"})
  }
})
router.put('/update/:id', async (req, res) => {
  try {
    const id = req.params.id
    const {nome, telefone, email, endereco} = req.body
    const user = await User.findByIdAndUpdate(id, {nome, telefone, email,
      endereco})

    return res.send({ user })
  } catch (err) {
    console.log(err)
    res.status(500).send({error: "Erro ao listar todos os usuarios"})
  }
})


module.exports = app => app.use('/users', router)
