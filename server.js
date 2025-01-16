const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // You can change to any port you prefer

// Serve static files from the directory
app.use(express.static(path.join(__dirname)));

// Serve the index.html file on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});