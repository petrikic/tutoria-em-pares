const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path')


require("./database/index")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/tmp/uploads', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

require('./app/controllers/index')(app)



app.listen(process.env.PORT || 3000)
