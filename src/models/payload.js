const mongoose = require('mongoose');

//create schema: gives structure to db
const payloadSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String
    
});
const Payload = mongoose.model('Payload', payloadSchema);

module.exports = Payload;