const mongoose = require('mongoose');
var models = mongoose.model('User');
var model = require("../models/user")

class userController{

    static async findAll(req, res) {
        try{
            const response = await model.find();
        }catch(err) {
            return res.status(400).send({error:"Search falied"});
        }
    };
      static async create(req, res) {
          const {email} = req.body;
          if(await model.findOne({email}))
              return res.status(400).send({error: "email already exists"})
          try{
              
            const response = await model.create(req.body);
            
            model.password = undefined;
            
            return res.send({ response})
        }catch(err) {
            return res.status(400).send({error: "Registration falied"})
        };
    };
      static async update(req, res) {
        try {
            const repsonse = await model.update({_id: req.body._id}, req.body)
        }catch(err) {
            return res.status(400).send({error: 'Update falied'})
        }
    };
     static async remove(req, res) {
        try {
            const response = await model.remove({_id: req.body._id}, req.body)
        }catch (err) {
            return res.status(400).send({errror: 'remove falied'});
        };
    }
}
module.exports = userController

     
 


