const express = require('express');
const mongoose = require('mongoose');
const Project = require('../models/Project');
const router = express.Router();

router.post('/projects', async (req, res) => {
    try {
        const { name, description, image } = req.body;
        const newProject = new Project({
            name,
            description,
            image, // You might need to handle file uploads separately, like using Multer
        });

        const savedProject = await newProject.save();
        res.status(201).json(savedProject); // Respond with the newly created project
    } catch (error) {
        res.status(500).json({ error: 'Failed to add project' });
    }
});

module.exports = router;
