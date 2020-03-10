const mongoose = require('mongoose');
var model;

module.exports = class Usuario{
    constructor(app){
        model = mongoose.model("User")

        app.get("/", async (req, res) => {
            try{
                const response = await model.find();
            }catch(err) {
                return res.status(400).send({error:"Search falied"});
            }
        });
        app.post("/",  async (req, res) => {
            try{
                const response = await model.create(req.body);
                
                return res.send({ response })
            }catch(err) {
                return res.status(400).send({error: "Registration falied"})
            }
        });
        app.put("/",  async (req, res) => {
            try {
                const repsonse = await model.update({_id: req.body._id}, req.body)
            }catch(err) {
                return res.status(400).send({error: 'Update falied'})
            }
        });
        app.delete("/",  async (req, res) => {
            try {
                const response = await model.remove({_id: req.body._id}, req.body)
            }catch (err) {
                return res.status(400).send({errror: 'remove falied'});
            }
        });
    }
}

