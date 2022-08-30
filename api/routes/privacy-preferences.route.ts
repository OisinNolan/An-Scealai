const { ObjectId } = require('bson');
const express = require('express');
const router = express.Router();

let PrivacyPreferences = require('../models/privacy-preferences');

const ep=(p,method='get')=>require('../endpoints_functions/privacy-preferences' + p)[method];

const route=(p,method)=>router.route(p)[method](ep(p,method));

route('','post');
route('','get');
route('/age','get');
route('/age','post');

export = router;
