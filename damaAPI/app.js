const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0-apgkj.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());

module.exports = app;