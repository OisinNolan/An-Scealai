
// Best to initialize the logger first
const logger = require('./logger');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const errorHandler = require('./utils/errorHandler');
require('./config/passport');

const openRoute = require('./routes/open.route');
const authRoute = require('./routes/auth.route');

const storyRoute = require('./routes/story.route');
// const userRoute = require('./routes/user.route');
const teacherCodeRoute = require('./routes/teacherCode.route');
const classroomRoute = require('./routes/classroom.route');
const chatbotRoute = require('./routes/chatbot.route');
const engagementRoute = require('./routes/engagement.route');
const statsRoute = require('./routes/stats.route');
const albumRoute = require('./routes/album.route');
const profileRoute = require('./routes/profile.route');
const messageRoute = require('./routes/messages.route');
const studentStatsRoute = require('./routes/studentStats.route');
const recordingRoute = require('./routes/recording.route');
const mailRoute = require('./routes/send_mail.route');
const gramadoirLogRoute = require('./routes/gramadoir_log.route');

const dbURL = require('./utils/dbUrl');
const jwtAuthMw = require('./utils/jwtAuthMw');

// use this to test where uncaughtExceptions get logged
// throw new Error('test error');

logger.info('DB url: ' + dbURL);
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
    () => {
      logger.info('Database is connected');
    },
    (err) => {
      logger.error({
        msg: 'Cannot connect to the database. ',
        while: 'trying to connect to mongodb with mongoose',
        error: err,
      });
    });

const app = express();
if(process.env.LOG_REQUESTS > 0) {
  app.use((req,res,next) => {
    logger.info({
      url: req.originalUrl,
      body: req.body,
      params: req.params,
      query: req.query,
      auth: req.headers.authorization
    });
    next();
  });
}
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.get('/whoami',jwtAuthMw,(req,res)=>{return res.json(req.user)})

app.use(openRoute);
app.use(authRoute);

app.use('/story', storyRoute);
// app.use('/user', userRoute);
app.use('/teacherCode', teacherCodeRoute);
app.use('/classroom', classroomRoute);
app.use('/Chatbot', chatbotRoute);
app.use('/engagement', engagementRoute);
app.use('/stats', statsRoute);
app.use('/album', albumRoute);
app.use('/profile', profileRoute);
app.use('/messages', messageRoute);
app.use('/studentStats', studentStatsRoute);
app.use('/gramadoir', gramadoirLogRoute);
app.use('/recordings', recordingRoute);

const synthesisRoute = require('./routes/synthesis.route');
app.use('/synthesis', synthesisRoute);

app.use('/mail', mailRoute);
app.use('/log', require('./routes/log.route'));

const port = process.env.PORT || 4000;

app.use(errorHandler);

// We don't want to call app.listen while testing
// See: https://github.com/visionmedia/supertest/issues/568#issuecomment-575994602
if (process.env.TEST != 1) {
  const server = app.listen(port, function(){
      logger.info('Listening on port ' + port);
  });
}

module.exports = app;
