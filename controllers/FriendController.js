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

module.exports = friendController;