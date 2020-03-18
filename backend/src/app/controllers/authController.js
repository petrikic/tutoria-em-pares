const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const mailer = require('../../modules/mailer');
const authConfig = require("../../config/auth");
const User = require('../models/user');

const router = express.Router();

function generateToken(params =  {}){
    return jwt.sign( params , authConfig.secret, {
        expiresIn: 86400,
    })
}

router.post('/register', async (req, res) => {
    var { email } = req.body
    try{
        if(await User.findOne({ email }))
            return res.status(203).send({error: 'Email ja existe'});
            if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
      console.log(erros)
                return res.status(203).send({error: "Nome invalido"})
            }
            if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
                return res.status(203).send({error: "Email invalado"})
            }
            if(req.body.password.length < 6){
                return res.status(203).send({error: "Senha precisa no minino de 6 caracteres"})
            }
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id }),
        });
    }catch(err){
        res.status(400).send("Falha ao criar usuario")
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password');

    if(!user)
      return res.status(203).send("Usuario invalido");

    if(!await bcrypt.compare(password, user.password))
        return res.status(203).send("Senha invalida")

    user.password = undefined;

    res.send({
        user,
        token: generateToken({ id: user.id }),
     });
})


router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;

    try {

        const user = await User.findOne({ email })

        if(!user)
            return res.status(203).send({ error: "Usuario nao encontrando" });

        const token = crypto.randomBytes(3).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set' : {
                passwordResetToken: token,
                passwordResetExpires: now,
            },
        })

        await mailer.sendMail({
            to: email,
            from: 'progrenato@gmail.com',
            template: 'auth/forgot_password',
            context: { token, email }
        }, (err) => {
            if (err) {
                console.log(err)
                return res.status(400).send({ error: "Erro ao esquecer a senha, tente novamente"});
            }
            return res.send();
        })


    } catch (err) {
        res.status(400).send({error: "Erro , tente novamente"})
    }
})

router.post('/reset_password' , async (req, res) => {
    const { email , token, password } = req.body;

    try {
        const user = await User.findOne({ email })
            .select('+passwordResetToken passwordResetExpires');

        if(!user)
            return res.status(203).send({ error: "Usuario nao encontrando" });

        if(token !== user.passwordResetToken)
            return res.status(203).send({error : "Token invalido"})

        const now = new Date();

        if(now > user.passwordResetExpires)
            return res.status(203).send({ error: 'Token expirado'})

        user.password = password;

        await user.save();

        res.send();

    } catch (err) {
        res.status(400).send({error: 'Nao foi possivel resetar a sua senha, tente novamente'})
    }

})

module.exports = app => app.use('/auth', router);
