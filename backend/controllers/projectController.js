// controllers/projectController.js
const Project = require('../models/Project');
const multer = require('multer');
const path = require('path');

// Set up multer storage configuration for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where images will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage: storage });

// API endpoint to create a new project with image upload
exports.createProject = [upload.single('image'), async (req, res) => {
  try {
    const { name, description, category, price, location } = req.body;
    
    // If an image was uploaded, its path will be in req.file.path
    const image = req.file ? req.file.path : null;  // Storing the image path

    // Create a new project document with all fields
    const newProject = new Project({
      name,
      description,
      category,
      price,
      location,
      image,  // Save the image path in the database
    });

    // Save the project to the database
    await newProject.save();
    res.status(201).json(newProject);  // Send the saved project data back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving the project' });
  }
}];
