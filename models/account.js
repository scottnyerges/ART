const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const Account = new Schema ({
	username: String,
	password: String,
	website: String,
	image: String,
	medium: String,

});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", Account);

