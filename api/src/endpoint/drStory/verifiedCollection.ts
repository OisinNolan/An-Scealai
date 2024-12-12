const DigitalReaderStory = require('../../models/drStory');
const User = require('../../models/user');
const mongoose = require('mongoose');
const {API404Error} = require('../../utils/APIError');

// get stories by owner (user) ID
const handler =  async (req, res) => {

  try {
    const digitalReaderStories = await DigitalReaderStory.aggregate([
      {$lookup: {
        from: 'users',
        localField: 'owner',
        foreignField: '_id',
        as: 'ownerDocArr'
      }},
      {$project: {
        title: 1,
        ownerDoc: {$first: '$ownerDocArr'},
        collections: 1,
        thumbnail: 1,
        public: 1,
        owner: 1,
      }},
      {$project: {
        title: 1,
        ownerRole: '$ownerDoc.role',
        collections: 1,
        thumbnail: 1,
        public: 1,
        owner: 1,
      }},
      {$match: {
        ownerRole: "ADMIN"
      }},
      {$match: {
        public: true
      }},
      {$match: {
        $expr: {
          $in: [req.params.collectionName, "$collections"]
        }
      }}
    ])
    
    //const digitalReaderStories = await DigitalReaderStory.find({'owner': req.params.collectionName}).sort({$natural:-1});

    if (!digitalReaderStories) {
      throw new API404Error(`No stories from collection ${req.params.collectionName} were found.`);
    }
    return res.status(200).json(digitalReaderStories);
  } catch {
    return res.status(400).json([]);
  }
};

export = handler;