const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const clientsRoute = require('./routes/clients');
const projectsRoute = require('./routes/projects');
const contactFormsRoute = require('./routes/contactForms');
const subscribersRoute = require('./routes/subscribers');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Define routes
//app.use('/api/clients', clientsRoute);
app.use('/api/projects', projectsRoute);
//app.use('/api/contact-forms', contactFormsRoute);
//app.use('/api/subscribers', subscribersRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
