const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const productRoutes = require('./routes/product');

mongoose.connect(`mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0-apgkj.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/products', productRoutes);

module.exports = app;