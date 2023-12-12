
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Choose the PORT and MongoDB connection settings you want to keep
const PORT = process.env.PORT || 3001;  // Adjusted to use the PORT from the main branch

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mesob', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define your MongoDB schema and models here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

