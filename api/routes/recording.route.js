const express = require('express');
const app = express();
const recordingRoutes = express.Router();
const MongoClient = require('mongodb').MongoClient;
const multer = require('multer');
const { Readable } = require('stream');
const mongodb = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
const querystring = require('querystring');
const request = require('request');
const { parse, stringify } = require('node-html-parser');

let VoiceRecording = require('../models/recording');
let User = require('../models/user');

let db;
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  }
  db = client.db('an-scealai');
});

recordingRoutes.route('/create').post((req, res) => {
    const recording = new VoiceRecording(req.body);
    console.log('Recording:', recording);
    recording.save().then(_ => {
        res.status(200).json({"message" : "Recording created successfully", "recording": recording});
    }).catch(err => {
        res.status(400).send("Unable to save to DB");
    });
});

recordingRoutes.route('/:id').get(function(req, res) {
    VoiceRecording.findById(req.params.id, (err, recording) => {
        if(err) {
            res.status(400).json({"message" : err.message});
        } else {
            res.json(recording);
        }
    });
});

recordingRoutes.route('/saveAudio/:storyId/:index/:uuid').post((req, res) => {
    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage, limits: { fields: 1, fileSize: 6000000, files: 1, parts: 2 }});
    upload.single('audio')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: "Upload Request Validation Failed" });
        }
        // create new stream and push audio data
        const readableTrackStream = new Readable();
        readableTrackStream.push(req.file.buffer);
        readableTrackStream.push(null);
        // get bucket (collection) for storing audio file
        let bucket = new mongodb.GridFSBucket(db, {
            bucketName: 'voiceRecording'
        });
        // get audio file from collection and save id to story audio id
        const fileId = "voice-rec-" + req.params.storyId.toString() + "-" + req.params.uuid.toString();
        let uploadStream = bucket.openUploadStream(fileId);

        // pipe data in stream to the audio file entry in the db 
        readableTrackStream.pipe(uploadStream);

        uploadStream.on('error', () => {
            return res.status(500).json({ message: "Error uploading file" });
        });

        uploadStream.on('finish', () => {
            return res.status(201).json({ message: "File uploaded successfully, stored under Mongo", fileId: uploadStream.id, index: req.params.index});
        });
    }); 
});

recordingRoutes.route('/audio/:id').get((req, res) => {
    let audioId;
    // get the audio id from the audio id set to the story
    try {
        audioId = new ObjectID(req.params.id);
    } catch(err) {
        return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
    }

    res.set('content-type', 'audio/mp3');
    res.set('accept-ranges', 'bytes');
    // get collection name for audio files
    let bucket = new mongodb.GridFSBucket(db, {
        bucketName: 'voiceRecording'
    });
    // create a new stream of file data using the bucket name
    let downloadStream = bucket.openDownloadStream(audioId);
    // write stream data to response if data is found
    downloadStream.on('data', (chunk) => {
        res.write(chunk);
    });

    downloadStream.on('error', () => {
        res.sendStatus(404);
    });
    // close the stream after data sent to response
    downloadStream.on('end', () => {
        res.end();
    });
})

module.exports = recordingRoutes;