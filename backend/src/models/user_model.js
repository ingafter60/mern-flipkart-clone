// models/user_model.js
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
		default:'user'
	},
	contactNumber: { type: String },
	profilePicture: { type: String }

}, { timestamps: true})

// hashing the password using bcrypt
userSchema.virtual('password')
.set(function(password){
	this.hash_password = bcrypt.hashSync(password, 10)
})

// comparing the passwords
userSchema.methods = {
	authenticate: function(password){
		return bcrypt.compareSync(password, this.hash_password)
	}
}

module.exports = mongoose.model('User', userSchema)