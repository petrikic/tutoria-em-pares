const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');


require("./database/index")

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

require('./app/controllers/index')(app)




const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))

       
    

