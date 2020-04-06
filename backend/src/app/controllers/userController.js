const express = require('express')
const User = require('../models/user');

const fs = require('fs')
const multer = require('multer')
const multerConfig = require('../../config/multer')


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
router.get('/perfil/:perfilId', async (req, res) => {
  try {
    const id = req.params.perfilId
    const user = await User.findById(id)

    return res.send({ user })
  } catch (err) {
    console.log(err)
    res.status(500).send({error: "Erro ao listar todos os usuarios"})
  }
})
router.delete('/remove/:id', async (req, res) => {
  try {

    const response  = await User.findByIdAndDelete(req.params.id)

    return res.send()
    
  } catch (err) {

    return res.status(400).send({error: "Delete user"})

  }

})
router.put('/admin/:id', async (req, res) => {
  try {

    const response  = await User.findByIdAndUpdate(req.params.id, req.body)

    return res.send({ response })
    
  } catch (err) {

    return res.status(400).send({error: "Usuario adm error"})

  }

})


router.put('/update/:id', multer(multerConfig).single("file") , async (req, res) => {
  function base64_decode(base64str,key){
    var bitmap = new Buffer (base64str, 'base64');
    fs.writeFileSync('src/temp/'+key+'',bitmap, 'binary', function (err){
      if(err){
        console.log('Conversao com erro');
      }
    } );
  }
  //Convertendo arquivo em binário
  function base64_encode(key){
    var bitmap = fs.readFileSync('tmp/uploads/'+key+'');
    return new Buffer (bitmap).toString('base64');
  }
  try {
    const {nome, email, telefone, rga, semestre} = req.body
    const id = req.params.id
    if(req.file === undefined || req.file === null){
      const user = await User.findByIdAndUpdate(id, req.body)

      return res.send({ user })
    
    }else{
      const {originalname: name, size, filename: key } = req.file
     
        const leitura = base64_encode(key)
        const bitmap = "data:image/jpeg;image/png;image/pjpeg;base64," + leitura

        const user = await User.findByIdAndUpdate(id,{
          nome,email,telefone,rga,semestre,
          name,
          size,
          key,
          url: '',
          profile: bitmap})

        return res.send({ user })
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({error: "Erro ao listar todos os usuarios"})
  }
})







module.exports = app => app.use('/users', router)
