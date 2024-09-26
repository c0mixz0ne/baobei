const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Run server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
