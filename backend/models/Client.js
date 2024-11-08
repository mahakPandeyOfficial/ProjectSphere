// models/Client.js
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', ClientSchema);
