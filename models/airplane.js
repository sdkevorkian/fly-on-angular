var mongoose = require('mongoose');

var AirplaneSchema = new mongoose.Schema({
    manufacturer: String,
    model: String,
    engines: Number,
    imgSrc: String
});

module.exports = mongoose.model('Airplane', AirplaneSchema);
