const express = require("express");
const passport = require("passport");
const Account = require("../models/account");
const router = express.Router();

// request for registering
router.post("/register", function(req,res){
	console.log(req.body);
	Account.register(new Account({
		username: req.body.username
	}),
	req.body.password,
	function(err,account){
		if(err){
			console.log(err);
			// return that didn't work
			return res.json(false);
		}
		passport.authenticate("local")(req, res, function(){
			res.json(true);
		})
	});
});

// request for login
router.post("/login", passport.authenticate("local"), function(req,res){
	res.json(true)
});

// logout
router.get("/logout", function(req, res){
	req.logout();
	res.json(true)
})

module.exports = router;