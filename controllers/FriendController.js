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

friendController.show = function(req,res){
	Friend.findOne({_id: req.params.id}).exec(function(err,friend){
		if(err){
			console.log("oops!", err);
		}
		else{
			res.render('../views/friends/show',{friend,friend});
		}
	});
}

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

friendController.edit = function(req,res){
	Friend.findOne({_id: req.params.id}).exec(function(err,friend){
		if(err){
			console.log("oops", err);
		}
		else{
			res.render('../views/friends/edit',{friend:friend});
		}
	});
};

module.exports = friendController;