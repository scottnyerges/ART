const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

if(process.env.NODE_ENV === "production"){
	app.use(express.static("client/build"));
}

app.get("/test", function(req,res){
	res.send("All good");
})

app.get("*", function(req,res){
	res.sendfile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, function(){
	console.log(`Serving on port ${PORT}`);
})
