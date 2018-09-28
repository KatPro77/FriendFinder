var path = require("path");
var friends = require("../data/friend.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/new", function (req, res) {
        var newFriend = req.body;
        var newScore = newFriend.scores;
        var total = 0;
        var yourMatch = 1000;
        var index = -1;

        for(var a = 0; a < friends.length; a++) {
            total = 0;

            for(var b = 00; b < newScore.length; b++) {
                var diff = Math.abs(parseInt(newScore[b]) - parseInt(friends[a].scores[b]));
                total +=diff;
            }

            if(total < yourMatch) {
                yourMatch = total;
                index = a;
            }
        }

        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
    });
}


