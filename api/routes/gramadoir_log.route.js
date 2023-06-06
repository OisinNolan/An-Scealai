// @ts-nocheck
const auth = require('../utils/jwtAuthMw');
const gramadoirRoutes = require('express').Router();

const { getUniqueErrorTypeCounts } = require('../endpoints_functions/gramadoir/getUniqueErrorTypeCounts');
const { getUserGrammarCounts } = require('../endpoints_functions/gramadoir/getUserGrammarCounts');
const { getTimeGrammarCounts } = require('../endpoints_functions/gramadoir/getTimeGrammarCounts');
const { callAnGramadoir } = require('../endpoints_functions/gramadoir/callAnGramadoir');

// //////////////////////////////////////////// POST
const insertHandler = require('../endpoints_functions/gramadoir/insert');
gramadoirRoutes
    .route('/insert')
    .post(auth, insertHandler);
const userGrammarCountsHandler = require('../endpoints_functions/gramadoir/userGrammarCounts');
gramadoirRoutes
    .route('/userGrammarCounts')
    .post(auth, userGrammarCountsHandler);
gramadoirRoutes
    .route('/getTimeGrammarCounts/:ownerId')
    .post(auth, getTimeGrammarCounts);

// //////////////////////////////////////////// GET
gramadoirRoutes
    .route('/callAnGramadoir/:teacs')
    .get(auth, callAnGramadoir);
gramadoirRoutes
    .route('/getUniqueErrorTypeCounts/:storyId')
    .get(auth, getUniqueErrorTypeCounts);
gramadoirRoutes
    .route('/getUserGrammarCounts')
    .get(auth, getUserGrammarCounts);

module.exports = gramadoirRoutes;
