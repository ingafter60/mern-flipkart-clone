// routes/user_route.js
const express = require('express')
const { signup } = require('../controller/user_controller')
const router = express.Router()

router.post('/signup', signup)

router.post('/signin', (req, res) => {
	

})

module.exports = router