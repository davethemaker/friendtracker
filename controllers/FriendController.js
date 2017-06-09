const mongoose = require('mongoose');
const Friend = require("../models/Friend");

const friendController = {};

friendController.list = function(req,res){
	Friend.find({}).exec(function(err, friends){
		if(err){
			console.log("Error");
		}
		else{
			res.render('../views/friends/index', {friends:friends});
		}
	});
};

friendController.create = function(req,res){
	res.render('../views/friends/create');
};

friendController.save =function(req,res){
	const friend = new Friend(req.body);

	friend.save(function(err){
		if(err){
			console.log(err);
			res.render('../views/friends/create');
		}
		else{
			console.log("success in creating friend");
			res.redirect('/friends/show/' + friend._id);
		}
	});
};

module.exports = friendController;