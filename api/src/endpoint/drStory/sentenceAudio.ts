const DigitalReaderSentenceAudio = require('../../models/drSentenceAudio');
const {API500Error} = require('../../utils/APIError');
const axios = require('axios');


/*const http = axios.create({
  baseURL: "https://abair.ie/api2",
  headers: {
    "Content-Type": "application/json",
    //"Access-Control-Allow-Origin": "*"
  }
});*/

/**
 * Creates a new story document on the DB.
 * @param {Object} req body: Story object
 * @return {Promise} 
 */

//function test (req:any) {
async function synthesiseAndStoreSent (req, res) {

  function no() {
    res.json(undefined);
  }
  function yes() {
    res.json(sentAudioObjs[0]);
  }


  try {
  // make sure all necessary body params are present
  if (req.body===undefined) return no();

  if (req.body.drStoryId===undefined) return no();
  if (req.body.voice===undefined) return no();
  if (req.body.sentenceId===undefined) return no();

  /*const sentAudioObj = DigitalReaderSentenceAudio.find({
    drStoryId: req.body.drStoryId,
    sentenceId: req.body.sentenceId,
    voice: req.body.voiceCode
  })*/
  let sentAudioObjs:Array<any> = await DigitalReaderSentenceAudio.find(req.body);
  if (!sentAudioObjs) return no();

  return yes();
  } catch {
    return no();
  }
}

export = synthesiseAndStoreSent;