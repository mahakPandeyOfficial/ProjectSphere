const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  city: String,
});

module.exports = mongoose.model('ContactForm', contactFormSchema);
