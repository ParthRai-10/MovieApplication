// models/artistModel.js
const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

module.exports = mongoose.model('Artist', artistSchema);
