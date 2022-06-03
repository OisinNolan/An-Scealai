const mongoose          = require('mongoose');
const crypto            = require('crypto');
const generate_password = require('generate-password');
const sign_jwt          = require('../util/sign-jwt');

const verificationSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  date: {
    type: Date,
  }
});

const resetPasswordSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  date: {
    type: Date,
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'TEACHER', 'STUDENT'],
    default: 'STUDENT',
  },
  language: {
    type: String,
    enum: ['ga', 'en'],
    default: 'en',
  },
  hash: String,
  salt: String,
  status: {
    type: String,
    enum: ['Pending', 'Active'],
    default: 'Pending',
  },
  verification: {
    type: verificationSchema,
    unique: true,
    default: {
      code: null,
      date: null,
    },
  },
  resetPassword: {
    type: resetPasswordSchema,
    unique: true,
    default: {
      code: null,
      date: null,
    },
  },
});

function hash(password,salt) {
  return crypto.pbkdf2Sync(
    password,
    salt,
    1000,
    64,
    'sha512').toString('hex');
}

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = hash(password,this.salt);
};

userSchema.methods.validPassword = function(password) {
  return this.hash === hash(password,this.salt);
};

userSchema.methods.validStatus = function() {
  if (!this.status) {
    return false;
  }
  const allowableStatus = /^(Active|Pending)$/;
  return this.status.match(allowableStatus);
};

userSchema.methods.generateJwt = async function() {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  const payload = {
    _id: this._id,
    username: this.username,
    role: this.role,
    language: this.language,
    exp: parseInt(
        expiry.getTime() / 1000 /* convert milliseconds to seconds */),
  };
  return await sign_jwt(payload);
};

userSchema.methods.generateNewPassword = function() {
  return generate_password.generate({
    length: 10,
    numbers: true,
  });
};

// NOTE This function does not save the details.
// They must be saved with <document>.save();
userSchema.methods.generateResetPasswordLink = async function(baseurl) {
  if ( ! this.resetPassword ) {
    this.resetPassword = {};
  }
  const payload = {
    username: this.username,
    email: this.email,
  };
  this.resetPassword.code = await sign_jwt(payload);
  this.resetPassword.date = new Date();

  return `${baseurl}user/generateNewPassword` +
    `?username=${this.username}` +
    `&email=${this.email}` +
    `&code=${this.resetPassword.code}`;
};

// NOTE This function does not save the details.
// They must be saved with <document>.save();
userSchema.methods.generateActivationLink = async function(baseurl, language) {
  // Make sure this.verification exists
  baseurl  = baseurl  || 'http://localhost:4000/';
  language = language || 'ga';
  const code = crypto.randomBytes(50).toString('hex');
  const date = new Date();
  this.verification = {code,date};
  await this.save();
  return `${baseurl}user/verify?` +
      `username=${this.username}` +
      `&email=${this.email}` +
      `&language=${language}` +
      `&verificationCode=${this.verification.code}`;
}

module.exports = mongoose.model('User', userSchema);
