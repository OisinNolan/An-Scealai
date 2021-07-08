"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var config = require('../DB');
var logger = require('../logger');
var passport = require('passport');
require('../config/passport');
var storyRoute = require('./routes/story.route');
var userRoute = require('./routes/user.route');
var teacherCodeRoute = require('./routes/teacherCode.route');
var classroomRoute = require('./routes/classroom.route');
var chatbotRoute = require('./routes/chatbot.route');
var engagementRoute = require('./routes/engagement.route');
var statsRoute = require('./routes/stats.route');
var albumRoute = require('./routes/album.route');
var profileRoute = require('./routes/profile.route');
var messageRoute = require('./routes/messages.route');
var studentStatsRoute = require('./routes/studentStats.route');
var recordingRoute = require('./routes/recording.route');
var mailRoute = require('./routes/send_mail.route');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    logger.info('Database is connected');
}, function (err) {
    logger.error('Cannot connect to the database. ', err);
});
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/story', storyRoute);
app.use('/user', userRoute);
app.use('/teacherCode', teacherCodeRoute);
app.use('/classroom', classroomRoute);
app.use('/Chatbot', chatbotRoute);
app.use('/engagement', engagementRoute);
app.use('/stats', statsRoute);
app.use('/album', albumRoute);
app.use('/profile', profileRoute);
app.use('/messages', messageRoute);
app.use('/studentStats', studentStatsRoute);
app.use('/recordings', recordingRoute);
app.use('/mail', mailRoute);
var port = process.env.PORT || 4000;
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.message = 404 + err.message;
    next(err);
});
// error handlers
// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({ "message": err.name + ": " + err.message });
    }
});
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        logger.error(err);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
var server = app.listen(port, function () {
    logger.info('Listening on port ' + port);
});
module.exports = app;
