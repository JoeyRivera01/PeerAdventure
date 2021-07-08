// setup express server
const express = require('express');
const app = express();
const adventureRouter = require('../routes/adventure.js');
const compression = require('compression');
// const morgan = require('morgan');

// setup middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(compression());
// app.use(morgan('dev'));

app.use(express.static('public'));

// setup database connections
const mongoose = require('mongoose');
const databaseName = 'peerAdventure';
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// set initial routes
app.use('/adventure', adventureRouter);
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// setup port listening
app.listen(process.env.PORT || 3001);

module.export = db;