const express = require('express');
const serveStatic = require('serve-static');
const path = require('path')
const  history = require('connect-history-api-fallback');


const app = express();

app.use(history())
app.use(serveStatic(path.join(__dirname + "/dist")));


const port = process.env.PORT || 8080;
app.listen(port);

console.log('server started '+ port);
