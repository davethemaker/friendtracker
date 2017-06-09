var mongoose 			= require('mongoose');

var FriendSchema 	= new mongoose.Schema({
	name: String,
	email: String,
	address: String
});

module.exports = mongoose.model('Friend', FriendSchema);