// backend/src/index.server.js
const express = require('express')
const env = require('dotenv')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


// environment variable or constants
env.config()

// mongodb connection

mongoose.connect(
	`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.yatl8.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`, 
	{
		useNewUrlParser: true, 
		useUnifiedTopology: true
	}
).then(() => {
	console.log('Mongodb connected!')
});


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
