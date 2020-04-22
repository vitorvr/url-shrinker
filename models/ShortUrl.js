const mongoose = require('mongoose');
const shortId = require('shortid');

const ShortUrlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shrinkedUrl: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);
