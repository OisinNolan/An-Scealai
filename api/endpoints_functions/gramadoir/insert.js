const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
import { UniqueStoryErrors, SentenceError } from './getUniqueErrorTypeCounts';

const model = mongoose.model("storyGrammarErrors", new mongoose.Schema({owner: ObjectId, storyId: ObjectId, sentences: Array, timestamp:Date}))

module.exports = async (req, res, next) => {
  const sentences = req.body.sentences;
  
  const storyId = new mongoose.mongo.ObjectId(req.body.storyId);
  const userId = new mongoose.mongo.ObjectId(req.user._id);
  
  await model.create({owner: userId, storyId: storyId, sentences: sentences, timestamp: new Date()});
  
  // Create a new 'empty' uniqueStoryErrors object in DB if one doesn't
  // exist for this story already
  const foundUniqueStoryErrors = await UniqueStoryErrors.findOne({"storyId": storyId});
  if (!foundUniqueStoryErrors) {
    const uniqueStoryErrors = new UniqueStoryErrors(
      {
        storyId: storyId,
        sentenceErrors: []
      }
    );
    await uniqueStoryErrors.save();
  }
  for (const {errors, sentence} of sentences) {
    await UniqueStoryErrors.updateOne(
      // QUERY: find all uniqueStoryErrors documents without 'sentence'
      {
        $and: [
          {"storyId": storyId},
          {
            "sentenceErrors": {
              $not: { $elemMatch: { sentence: sentence } }
            }
          }
        ]
      },
      // UPDATE
      {
        $push: {
          sentenceErrors: {
            sentence: sentence,
            grammarErrors: errors
          }
        }
      }
    )
  }

  res.json();
}
