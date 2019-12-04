var path = require('path');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    })

    app.use(function(req, res, next) {
        res.status(404);
        res.send('Whoops! 404 error, File Not Found!')
    })
}