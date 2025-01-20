const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

app.use(express.json());

// Simple route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.post('/api/send', (req, res) => {
    const name = req.body.name; // Assuming data has a key 'name'
    const message = req.body.message; // Assuming data has a key 'message'
    // Process the data here (e.g., store in database, send an email)
    res.send('POST request received successfully!');
});

// Run server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
