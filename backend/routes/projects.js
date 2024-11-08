const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: `Error fetching projects: ${error.message}` });
    }
});

// POST a new project
router.post('/', async (req, res) => {
    const project = new Project(req.body);
    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: `Error saving project: ${error.message}` });
    }
});

// PUT update project by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Project ID is required' });
    }

    try {
        // Find the project by ID and update
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        
        // If project not found, return a 404 error
        if (!updatedProject) {
            return res.status(404).json({ message: `Project with ID ${id} not found` });
        }

        res.json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: `Error updating project: ${error.message}` });
    }
});

// DELETE project by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Project ID is required' });
    }

    try {
        // Check if the project exists before trying to delete
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: `Project with ID ${id} not found` });
        }

        // Delete the project if found
        await Project.findByIdAndDelete(id);
        res.json({ message: `Project with ID ${id} deleted` });
    } catch (error) {
        res.status(500).json({ message: `Error deleting project: ${error.message}` });
    }
});

module.exports = router;
