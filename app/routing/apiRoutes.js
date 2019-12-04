var friendList = require('../data/friend.js');

module.exports = function(app) {
    app.get('/api/myFriends', function(req, res) {
        res.json(friendList);
    });

    app.post('/api/myFriends', function(req, res) {
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var topMatch = 0;


        for (var i = 0; i < friendList.length; i++) {
            var scoresDiff = 0;

            for (var j = 0; j < newFriendScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            scoresArray.push(scoresDiff);
        }


        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[topMatch]) {
                topMatch = i;
            }
        }

        var bff = friendList[topMatch];
        res.json(bff);

        friendList.push(req.body);
    });
};