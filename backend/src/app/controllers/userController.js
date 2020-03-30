const express = require('express')
const User = require('../models/user');
const Post = require('../models/post');
const fs = require('fs')
const image2base64 = require('image-to-base64');


const multer = require('multer')
const multerConfig = require('../../config/multer')


const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const user = await User.find().populate(['post'])

    return res.send({ user })
  } catch (err) {
    console.log(err)
    res.status(500).send({error: "Erro ao listar todos os usuarios"})
  }
})
router.put('/update/:id', multer(multerConfig).single("file") , async (req, res) => {
  try {
    const {nome, email, telefone, rga, semestre} = req.body
    const id = req.params.id
    if(req.file === undefined || req.file === null){
      const user = await User.findByIdAndUpdate(id, req.body)

      return res.send({ user })
    }else{
      const {originalname: name, size, filename: key } = req.file
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

router.post('/upload', multer(multerConfig).single("file"), async (req, res) => {
      const {originalname: name, size, filename: key } = req.file

      let bitmap = new Buffer(fs.readFileSync(req.file.path), 'base64')
      console.log(bitmap)

       try {
          const post = await Post.create({
            name,
            size,
            key,
            url: '',
            profile: bitmap,
          })

          return res.json(post)

      } catch (err) {
        console.log(err)
        return res.status(500).send({error: 'Erro ao tentar enviar a imagem'})
      }
})





module.exports = app => app.use('/users', router)
