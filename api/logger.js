const winston = require('winston');
const path = require('path');
const mongodb = require('mongodb');
// var stackify = require('stackify-logger');

// logger.error is console.error until the winston logger is created
var logger ={ error: console.error };

// TODO: I'm not sure if this line should be included
// process.on('uncaughtException', err => {
//   logger.error( { message: "UNCAUGHT EXCEPTION [Inside 'uncaughtException' event] ", error: err});
// });

const errorFile = path.join(__dirname, 'logs/error.log');
const combinedFile = path.join(__dirname, 'logs/combined.log');
const uncaughtExceptionsFile = path.join(__dirname, 'logs/uncaughtExceptions.log');

const consoleFormat = winston.format.printf(
  ({ level, message, error, timestamp, ...metadata}) => {
    // TODO log the rest parameters in metadata
    let string_message = JSON.stringify(message);
    let msg = `${timestamp} [${level}] : ${string_message} : ${JSON.stringify(error)}`;
    return msg;
  })

// Create our logger object
logger = winston.createLogger({
  transports: [
    // This transport lets us log to the console
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        consoleFormat
      )
    }),
    // This transport logs to the error file
    new winston.transports.File({ filename: errorFile, level: 'error' }),
    // This transport should be were everything gets sent
    new winston.transports.File({ filename: combinedFile}),
  ],

  levels:  { 
    emerg: 0, 
    alert: 1, 
    crit: 2, 
    error: 3, 
    warning: 4, 
    notice: 5, 
    info: 6, 
    debug: 7
  },
  /*
  exceptionHandlers: [
    new winston.transports.File({ filename: uncaughtExceptionsFile }),
  ],
  */
});

require('winston-mongodb');

var preconnectedDB = null;
const client = mongodb.MongoClient.connect('mongodb://localhost:27017/an-scealai',
  { useUnifiedTopology: true, useNewUrlParser: true})
  .then( db => {
    logger.info('Winston has connected to MongoDB');
    const date = new Date();
    const shortDate = date.toLocaleString('en-gb', {weekday: 'short' })
      + date.toLocaleString('en-gb', { month: 'short' }) + date.getDate() + '_' +date.getHours() + ':' + date.getMinutes();
    preconnectedDB = db;
    var mongoTransport;
    mongoTransport =  new winston.transports.MongoDB({
      level: "info", // info is the default
      db: preconnectedDB, // user: logger, pwd: logger, db: logger
      collection: 'log', // default is 'log'
      options: { // modified version of default
        poolSize: 2, // default
        useNewUrlParser: true, // default
        // tryReconnect: true // default // not compatible with useUnifiedTopology: ture
        useUnifiedTopology: true, // not default
      }
    });
    logger.info("Adding MongoDB transport to logger");
    logger.add(mongoTransport);
  })
  .catch( err => {
    logger.error("FAILED TO CONNECT TO MONGODB. MONGODB TRANSPORT WILL NOT BE ADDED.", err.message);
  }); 


// This should be deleted before merging the PR
//logger.emerg("this is just a test");
//logger.alert("this is just a test");
//logger.crit("this is just a test");
//logger.error("this is just a test");
//logger.warning("this is just a test");
//logger.notice("this is just a test");
//logger.info("this is just a test");
//logger.debug("this is just a test");

module.exports = logger;
