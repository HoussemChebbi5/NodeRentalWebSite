const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const {DB_URI} = require('./config/dev');
const SeedDb = require('./seed-db');
const rentalsRouter = require('./routes/rentals');

mongoose.connect(DB_URI, { useNewUrlParser: true }).then(() => {
    const fakeDb = new SeedDb();
    fakeDb.seedDb();
});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/rentals', rentalsRouter);

module.exports = app;
