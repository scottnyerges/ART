const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const fetchController = require("./controllers/fetch");


const PORT = process.env.PORT || 3001;

const authRoutes = require("./routes/auth");

const expressSession = require("express-session");

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use(passport.initialize());
app.use(passport.session());

const Account = require("./models/account");
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());



mongoose.connect("mongodb://localhost/fix");

app.use(expressSession({
	secret: "keyboard cat",
	resave: false,
	saveUninitialized: false

}));



if(process.env.NODE_ENV === "production"){
	app.use(express.static("client/build"));
}


app.use("/api/auth", authRoutes);



app.get("/api/test", function(req,res){
	res.send("All good");
})


// THIS WILL SEND ACCOUNT INFO TO THE GALLERY PAGE
app.get("/api/account", function
(req, res) {

    Account.find({}, function (err,
accounts) {

        res.send(accounts);

    });

});

app.get("/api/fetch", fetchController.scrapeHeadlines)


app.get("*", function(req,res){
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
})




app.listen(PORT, function(){
	console.log(`Serving on port ${PORT}`);
})
