// models/user_model.js
const mongoose = require('mongoose')

// defining userSchema
const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		require: true,
		trim: true,
		min: 3,
		max: 30
	},
	firstName: {
		type: String,
		require: true,
		trim: true,
		min: 3,
		max: 30
	},
	username: {
		type: String,
		require: true,
		trim: true,
		min: 3,
		max: 30,
		unique: true,
		index: true,
		lowecase: true
	},
	email: {
		type: String,
		require: true
	},
	hash_password: {
		type: String,
		require: true
	},
	role: {
		type: String,
		enum: ['user', 'admin'],
		default:'admin'
	},
	contactNumber: { type: String },
	profilePicture: { type: String }

}, { timestamps: true})

module.exports = mongoose.model('User', userSchema)