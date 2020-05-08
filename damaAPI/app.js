const express = require('express');
const mongoose = require('mongoose');

const app = express();
const productRoutes = require('./routes/product');

mongoose.connect(`mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0-apgkj.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(express.static('public'));

app.use('/products', productRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;