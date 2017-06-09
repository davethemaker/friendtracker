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
// create friend with form
router.get('/create', function(req,res){
	friend.create(req,res);
});
// edit specific friend
router.post('/update/:id', function(req,res){
	friend.update(req,res);
});
// save new friend to db
router.post('/save', function(req,res){
	friend.save(req,res);
});
// edit friend
router.get('/edit/:id', function(req,res){
	friend.edit(req,res);
});

router.post('/delete/:id', function(req,res,next){
	friend.delete(req,res);
});
// export module
module.exports = router;