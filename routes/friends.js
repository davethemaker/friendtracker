const express = require('express');
const router = express.Router();
const friend = require('../controllers/FriendController.js');

// GET all friends
router.get('/', function(req,res){
	friend.list(req,res);
});

// show single friend by id
router.get('/show/:id', function(req,res){
	friend.show(req,res);
});

// create friend
router.get('/create', function(req,res){
	friend.create(req,res);
});

router.post('/save', function(req,res){
	friend.save(req,res);
});
// export module
module.exports = router;