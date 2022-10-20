const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    name: String,
    careerObjective: String,
    image: String,
    ssc: Number,
    hsc: Number,
    graduation: Number,
    project: String,
    internship: String,
    skill: String,
    achievement: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});


module.exports = mongoose.model('Campground', CampgroundSchema);