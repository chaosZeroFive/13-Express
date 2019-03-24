var friends = require("../data/friends");
var chalk = require("chalk");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var currentPerson = req.body;
        var bff = 10000;
        var math;
        var bestPerson;
        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < currentPerson.scores.length; j++) {
                math += Math.abs(friends[i].scores[j] - currentPerson.scores[j]);
            }
            if (math < bff) {
                bestPerson = friends[i];
                bff = math;
            }
            var math = 0;
        };
        for (var k = 0; k < currentPerson.scores.length; k++) {
            //console.log(currentPerson.scores[k]);
        };
        for (var l = 0; l < friends.length; l++) {
            console.log(`
            ${chalk.yellow(friends[l].name)} ${chalk.yellow(friends[l].scores)}
            ${chalk.yellow("--------------------------------------------------")}
            `);
        };
        friends.push(req.body);
        res.json(bestPerson);
    });
};