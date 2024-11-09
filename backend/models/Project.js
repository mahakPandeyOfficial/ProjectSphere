const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,  // This should be a string to store the image path
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
