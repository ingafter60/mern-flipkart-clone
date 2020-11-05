// backend/src/index.server.js
const express = require('express')
const env = require('dotenv')
const app = express()
const bodyParser = require('body-parser')

// environment variable or constants
env.config()

// app.use(express.json())
app.use(bodyParser())

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello world from api server ...',
  })
})

app.post('/data', (req, res, next) => {
  res.status(200).json({
    message: req.body,
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
