const mongoose = require('mongoose');

const operatingHoursSchema = new mongoose.Schema({
    day: { type: String, required: true },
    time: { type: String }
});

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String},
    location: { type: String },
    access: { type: String },
    halalCertification: { type: String },
    pork: { type: String },
    alcohol: { type: String },
    prayerRoom: { type: String },
    muslimMenu: { type: String },
    operatingHours: [operatingHoursSchema],
    prefecture: { type: String },
    officialPage: { type: String },
    country: { type: String, required: true },
    totalSeats: { type: mongoose.Schema.Types.Mixed },
    imgUrl: { type: String }
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
