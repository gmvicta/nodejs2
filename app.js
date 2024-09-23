const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
const VictaRouter = require('./routes/VictaRouter');

// Set view engine and directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use the router
app.use('/', VictaRouter);

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
