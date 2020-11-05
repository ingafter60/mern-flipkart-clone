// backend/src/index.server.js
const express = require('express')
const env = require('dotenv')
const app = express()

// environment variable or constants
env.config()

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})