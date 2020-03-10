const mongoose = require('mongoose');


var model = mongoose.model('User');

module.exports = class userController{

    static async findAll(req, res) {
        try{
            const response = await model.find();
        }catch(err) {
            return res.status(400).send({error:"Search falied"});
        }
    };
      static async create(req, res) {
        const { email } = req.body;
        try{
            if(await model.findOne({ email }))
                return req.status(400).send({error: 'user already exists'})
            
            const response = await model.create(req.body);

            
            return res.send({ response })
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

     
 


