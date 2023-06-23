var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_, res) => {
	res.sendFile(__dirname + "/views/index.html");
})

app.get("/api/whoami", (req, res) => {
	res.json({
		ipaddress: req.ip,
		language: req.headers["accept-language"],
		software: req.headers["user-agent"]
	})
})

var listener = app.listen(process.env.PORT || 3000, function() {
	console.log("Your app is listening on port " + listener.address().port);
});
