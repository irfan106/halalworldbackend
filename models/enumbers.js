const mongoose = require('mongoose');

const eNumberSchema = new mongoose.Schema({
  Number: { type: String, required: true },
  Name: { type: String },
  HalalStatusFirst: { type: String },
  HalalStatusSecond: { type: String },
  Tag: { type: String },
  Type: { type: String },
});

const ENumber = mongoose.model('ENumber', eNumberSchema);

module.exports = ENumber;
