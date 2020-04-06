require("dotenv/config")
const mongoose = require("mongoose")

// mongoose.connect(`mongodb://${process.env.USERS}:${process.env.PASSWORD}@${process.env.DOCKER_MONGO_LOCAL}:${process.env.DOCKER_MONGO_PORT}`, {

//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false
//     })
//     .catch((err) => console.log("error: " + err))

mongoose.connect(`mongodb+srv://renato:renato123@cluster0-y0qaz.mongodb.net/test?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true })


// // Banco de Dados local Do Higor :
// mongoose.connect('mongodb://localhost:27017/projectlocaldb');

const db = mongoose.connection

db.once('open', () => console.log("Banco de dados funcionando ..."))


module.exports = mongoose;
