const express = require('express')
const User = require('../models/user');
const Post = require('../models/post');



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
router.put('/update/:id' , async (req, res) => {
  try {
    const id = req.params.id
    const post = req.body.post
    const {nome, telefone, email, endereco} = req.body
    const user = await User.findByIdAndUpdate(id, {nome, telefone, email,
      endereco,
      post: post
    })

    return res.send({ user })
  } catch (err) {
    console.log(err)
    res.status(500).send({error: "Erro ao listar todos os usuarios"})
  }
})


router.post('/upload', multer(multerConfig).single("file"), async (req, res) => {
      const {originalname: name, size, filename: key } = req.file

       try {
          const post = await Post.create({
            name,
            size,
            key,
            url: '',
            user: req._id
          })

          return res.json(post)

      } catch (err) {
        console.log(err)
        return res.status(500).send({error: 'Erro ao tentar enviar a imagem'})
      }
})





module.exports = app => app.use('/users', router)
