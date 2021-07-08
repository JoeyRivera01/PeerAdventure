const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// product schema
const adventureSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  paths: Array,
});
/*
 Paths Array of objects =
 [ {endGame: Boolean, text: String, outcomeId: Number}, {}, {} ]
*/

// product model
const Adventure = mongoose.model('adventure', adventureSchema);

module.exports = Adventure;