const express = require('express');
const router = express.Router();
const friend = require('../controllers/FriendController.js');

// GET all friends
router.get('/', function(req,res){
	friend.list(req,res);
});

// show single friend by id
route.get('/show/:id', friend.show);

// create friend
route.get('/create', friend.create);

router.post('/save', friend.save);
// export module
module.exports = router;