const mongoose = require('mongoose');

const mosqueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String },
    prefecture: { type: String },
    country: { type: String, required: true },
    contact: { type: String },
    officialPageLink: { type: String }
}, { timestamps: true });

const Mosque = mongoose.model('Mosque', mosqueSchema);

module.exports = Mosque;
