const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes/routes')

require('dotenv').config()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  next();
})

app.use('/', routes);

const serverPort = process.env.PORT || 3100
app.listen(serverPort, () => {
  console.log(`🚀 Server is listening on port: ${serverPort}`)
})