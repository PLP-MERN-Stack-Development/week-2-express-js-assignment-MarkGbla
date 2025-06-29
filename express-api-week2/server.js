const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const logger = require('./Middleware/logger');
const errorHandler = require('./Middleware/errorHandler');
const productRoutes = require('./routes/products');
// Make sure the casing matches the actual file name on disk, e.g. 'Auth.js'
const auth = require('./Middleware/Auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Hello World Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Product Routes with authentication (if needed)
app.use('/api/products', auth, productRoutes);

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
