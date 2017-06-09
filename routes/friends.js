const express = require('express');
const router = express.Router();
const friend = require('../controllers/FriendController.js');

// GET all friends
router.get('/', function(req,res){
	friend.list(req,res);
});

module.exports = router;