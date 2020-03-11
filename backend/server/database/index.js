require("dotenv/config")
const mongoose = require("mongoose")

mongoose.connect(`mongodb://${process.env.USERS}:${process.env.PASSWORD}@${process.env.DOCKER_MONGO_LOCAL}:${process.env.DOCKER_MONGO_PORT}`, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once('open', () => { console.log("Banco de dados funcionando ...")})