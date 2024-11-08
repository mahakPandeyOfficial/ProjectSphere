const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// GET all clients
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: `Error fetching clients: ${error.message}` });
    }
});

// POST a new client
router.post('/', async (req, res) => {
    const client = new Client(req.body);
    try {
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({ message: `Error saving client: ${error.message}` });
    }
});

// PUT update client by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Client ID is required' });
    }

    try {
        // Find the client by ID and update
        const updatedClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
        
        // Check if client exists
        if (!updatedClient) {
            return res.status(404).json({ message: `Client with ID ${id} not found` });
        }

        res.json(updatedClient);
    } catch (error) {
        res.status(400).json({ message: `Error updating client: ${error.message}` });
    }
});

// DELETE client by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Client ID is required' });
    }

    try {
        // Check if the client exists
        const client = await Client.findById(id);
        if (!client) {
            return res.status(404).json({ message: `Client with ID ${id} not found` });
        }

        // If exists, delete the client
        await Client.findByIdAndDelete(id);
        res.json({ message: `Client with ID ${id} deleted` });
    } catch (error) {
        res.status(500).json({ message: `Error deleting client: ${error.message}` });
    }
});

module.exports = router;
