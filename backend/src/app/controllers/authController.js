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
        throw {
          log_message: 'Credenciais de email invalido',
          status: '403',
          client_message: 'Email ja cadastrado'
        }
        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
          throw {
            log_message: 'Credenciais de nome invalido',
            status: '403',
            client_message: 'Nome invalido'
          }
        }
        if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
          throw {
            log_message: 'Credenciais de email invalido',
            status: '403',
            client_message: 'Email invalido'
          }
        }
        if(req.body.password.length < 6){
          throw {
            log_message: 'Credenciais de senha invalida',
            status: '403',
            client_message: 'Senha invalida, precisa ter no minino 6 digitos'
          }
        }
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({
            user,
            token: generateToken({ id: user.id }),
        });
    }catch(err){
        res.status(err.status).send(err.client_message)
    }
})

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email }).select('+password');
      if(!user)
        throw {
          log_message: 'Credenciais de usuario invalido',
          status: '403',
          client_message: 'Usuario invalido'
        }

      if(!await bcrypt.compare(password, user.password))
        throw {
          log_message: 'Credenciais de senha invalido',
          status: '403',
          client_message: 'Senha invalida'
        }
      user.password = undefined;
      res.send({
        user,
          token: generateToken({ id: user.id }),
      });
    } catch (err) {

      return res.status(err.status).send(err.client_message)
    }
})


router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;

    try {

        const user = await User.findOne({ email })

        if(!user)
        throw {
          log_message: 'Credenciais de usuario invalido',
          status: '403',
          client_message: 'Usuario invalido'
        }

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
                throw {
                  log_message: 'Credenciais de senha invalido',
                  status: '403',
                  client_message: 'Erro na senha, tente novamente'
                }
            }
            return res.send();
        })


    } catch (err) {
        res.status(err.status).send(err.client_message)
    }
})

router.post('/reset_password' , async (req, res) => {
    const { email , token, password } = req.body;

    try {
        const user = await User.findOne({ email })
            .select('+passwordResetToken passwordResetExpires');

        if(!user)
        throw {
          log_message: 'Credenciais de usuario invalido',
          status: '403',
          client_message: 'Usuario invalido'
        }

        if(token !== user.passwordResetToken)
        throw {
          log_message: 'Credenciais de token invalido',
          status: '403',
          client_message: 'Token invalido'
        }

        const now = new Date();

        if(now > user.passwordResetExpires)
        throw {
          log_message: 'Credenciais de token expirado',
          status: '403',
          client_message: 'Token expirado'
        }

        user.password = password;

        await user.save();

        res.send();

    } catch (err) {
        res.status(err.status).send(err.client_message)
    }

})

module.exports = app => app.use('/auth', router);
