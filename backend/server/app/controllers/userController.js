const mongoose = require('mongoose');
var model = mongoose.model('User');

class userController{
    // READ
    static async findAll(req, res) {
        try{
            const response = await model.find();
        }catch(err) {
            return res.status(400).send({error:"Search falied"});
        }
    };
    // CREATE
      static async create(req, res) {
        var erros = []
        const {email} = req.body;
        if(await model.findOne({email}))
            return res.status(400).send({error: "email already exists"})
        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
            erros.push({texto: "Nome invalido"})
            console.log(erros)
            return res.status(400).send({error: "nome invalid"})
        }
        if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
            erros.push({texto: "Email invalido"})
            console.log(erros)
            return res.status(400).send({error: "email invalid"})
        }
        if(req.body.password.length < 6){
            erros.push({texto: "Senha invalida"})
            return res.status(400).send({error: "Senha precisa no minino de 6 caracteres"})
        }

        if(erros > 0) {
            res.render('/register', {erros: erros})
        }
        try{
            const response = await model.create(req.body);
            response.password = undefined;
            return res.send({ response })
        }catch(err) {
            return res.status(400).send({error: "Registration falied"})
        };
    };
    // UPDATE
      static async update(req, res) {
        try {
            const repsonse = await model.update({_id: req.body._id}, req.body)
        }catch(err) {
            return res.status(400).send({error: 'Update falied'})
        }
    };
    // REMOVE
     static async remove(req, res) {
        try {
            const response = await model.remove({_id: req.body._id}, req.body)
        }catch (err) {
            return res.status(400).send({errror: 'remove falied'});
        };
    }
}
module.exports = userController

     
 


