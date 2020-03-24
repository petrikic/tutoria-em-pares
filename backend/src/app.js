const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path')
var socket = require('socket.io');



app.get('/', (req, res) => {
  return res.sendFile('index.html', {root : __dirname + '/public'})
})

app.set('view engine', 'ejs')
require("./database/index")

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/tmp/uploads', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

require('./app/controllers/index')(app)



const PORT = 3000
var server = app.listen(PORT,
() => console.log(`Servidor rodando na porta: ${PORT}`))

// Sockeat IO
var io = socket(server);
io.on('connection', (socket) => {

    console.log('connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});
