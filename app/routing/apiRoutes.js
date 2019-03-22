
var friends = require("../data/friends");

module.exports = function (app) {
    // get all in ff_db
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // submits to the survey
    app.post("/api/friends", function (req, res) {
        var match = {
            name: "",
            photo: "",
            userDiff: 0
        }

        var userData = req.body;
        var userScores = userData.scores;
        var userName = userData.name;
        var userPhoto = userData.photo;

        var totalDiff = 0;

        for (var i = 0; i < userScores.length; i++){
            totalDiff = Math.abs(parseInt(userScores[i]) - parseInt(friends[i].scores[i]));
        }
    });
}