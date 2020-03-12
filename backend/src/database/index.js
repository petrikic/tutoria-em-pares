require("dotenv/config")
const mongoose = require("mongoose")

const db = mongoose.connection
    mongoose.connect(`mongodb://${process.env.USERS}:${process.env.PASSWORD}@${process.env.DOCKER_MONGO_LOCAL}:${process.env.DOCKER_MONGO_PORT}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .catch((err) => console.log("error: " + err))

    db.once('open', () =>  console.log("Banco de dados funcionando ..."))


mongoose.Promise = global.Promise;

module.exports = mongoose;