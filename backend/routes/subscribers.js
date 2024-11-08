const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// GET all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: `Error fetching subscribers: ${error.message}` });
    }
});

// POST a new subscriber
router.post('/', async (req, res) => {
    const subscriber = new Subscriber(req.body);
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(400).json({ message: `Error saving subscriber: ${error.message}` });
    }
});

// DELETE subscriber by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Subscriber ID is required' });
    }

    try {
        // Check if the subscriber exists before deleting
        const subscriber = await Subscriber.findById(id);
        if (!subscriber) {
            return res.status(404).json({ message: `Subscriber with ID ${id} not found` });
        }

        // If found, delete the subscriber
        await Subscriber.findByIdAndDelete(id);
        res.json({ message: `Subscriber with ID ${id} deleted` });
    } catch (error) {
        res.status(500).json({ message: `Error deleting subscriber: ${error.message}` });
    }
});

module.exports = router;
