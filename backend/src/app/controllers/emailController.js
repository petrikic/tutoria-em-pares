const serviceEmail = require('../../service/serviceEmail')
const express = require('express')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    if (!req.body)
      res.status(400).send({
        error: "Email obrigatorio"
      })

      const email = await serviceEmail.sendEmail(req.body)
      console.log(email)
      return res.send({ email })
  } catch (err) {
    console.log(err)
    res.status(500).send({error: "Erro ao tentar enviar o email"})
  }
})


module.exports = app => app.use('/email', router)
