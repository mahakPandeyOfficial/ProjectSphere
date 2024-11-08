const express = require('express');
const router = express.Router();
const ContactForm = require('../models/ContactForm');

// GET all contact form submissions
router.get('/', async (req, res) => {
    try {
        const contactForms = await ContactForm.find();
        res.json(contactForms);
    } catch (error) {
        res.status(500).json({ message: `Error fetching contact forms: ${error.message}` });
    }
});

// POST a new contact form submission
router.post('/', async (req, res) => {
    const contactForm = new ContactForm(req.body);
    try {
        const newContactForm = await contactForm.save();
        res.status(201).json(newContactForm);
    } catch (error) {
        res.status(400).json({ message: `Error saving contact form: ${error.message}` });
    }
});

// DELETE contact form submission by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'Contact form ID is required' });
    }

    try {
        // Check if the contact form with the provided ID exists
        const contactForm = await ContactForm.findById(id);
        if (!contactForm) {
            return res.status(404).json({ message: `Contact form with ID ${id} not found` });
        }

        // If exists, delete it
        await ContactForm.findByIdAndDelete(id);
        res.json({ message: `Contact form submission with ID ${id} deleted` });
    } catch (error) {
        res.status(500).json({ message: `Error deleting contact form: ${error.message}` });
    }
});

module.exports = router;
