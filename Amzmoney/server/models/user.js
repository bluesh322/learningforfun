const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	// object of properties
	email : { type: String, required: true, unique: true, maxLength: 64}, 
	username: { type: String, required: true, maxLength: 32}, 
	passwordHash: { type: String, required: true}

});

module.exports = mongoose.model('User', UserSchema);