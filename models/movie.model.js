// models/movieModel.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
  releaseDate: { type: Date },
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }]
});

module.exports = mongoose.model('Movie', movieSchema);
