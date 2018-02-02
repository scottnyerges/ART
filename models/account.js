const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const Account = new Schema ({
	username: String,
	password: String,
	// IS THIS WHERE I ADD ADDITIONAL USER DATA VARs LIKE URL, ETC?
	// THESE VARS WOULD COME FROM 
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", Account);

