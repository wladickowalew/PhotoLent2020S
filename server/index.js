let express = require("express");
let vjm     = require("vue-jwt-mongo");
let multer  = require("multer");
let upload  = multer({dest: "./data"});
let Mclient = require("mongodb").MongoClient;
let url = "mongodb://localhost", dbName = "photofeed";

let app = express();

function getKey() {
	return "1vXWm46QvCoGoERhKBnVJdfeilINtbWFmEMbXiX4aWNsh0SKBejCfYXn0VGmipf";
}

let vjmServer = vjm.Server({
	mongoUrl: url + "/" + dbName,
	jwtSecret: getKey()
});

app.use(express.static("../client"));

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login"   , vjmServer.loginHandler);

Mclient.connect(url, function(err, client){
	database = client.db(dbName);
	app.listen(8080);
})