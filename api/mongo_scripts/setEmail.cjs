
// Get username and password from command line args
const username = process.argv[2];
const email = process.argv[3];

console.log('username:',username,'\nemail:',email);

const User = require('../models/user.cjs');
const mongoose = require('mongoose');
const config = require('../DB.cjs');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

main = async () => {
  // Connect to mongodb
  await mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => {console.log('Database is connected');},
    (err) => {console.log('Cannot connect to the database. ',err)}
  );

  // Find the user
  await User.findOne({username: username})
    .then(
      async (user) => {
        if (user) {
          // Change the user's password
          user.email = email;
          await user.save();
	  console.log('user.email:', user.email);
        } else {
          console.log('User not found');
        }
      },
      error => {
        console.error(error);
      });
  process.exit(0);
}


main();
