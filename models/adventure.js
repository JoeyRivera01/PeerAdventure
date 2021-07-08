const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// product schema
const adventureSchema = new Schema({
  outcomeId: {
    type: Number,
    unique: true,
  },
  story: String,
  endGame: Boolean,
  choices: Array,
});
/*
 Choices Array of objects =
 [ {endGame: Boolean, text: String, outcomeId: Number}, {}, {} ]
*/

// product model
const Adventure = mongoose.model('adventure', adventureSchema);

module.exports = Adventure;