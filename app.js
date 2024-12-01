const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files like CSS, images, etc.
app.use(express.static(path.join(__dirname, 'src')));

// Serve the index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
