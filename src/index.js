const express = require('express');
const db = require('./db');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

// Mounting routes
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
