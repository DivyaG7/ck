// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Form = require('./modals/form.modal');

const app = express();
const port = process.env.PORT || 8001;
const url = process.env.ATLAS_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Database connected!");
});


// Routes
app.post('/form1', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const formData = new Form({ name, email, message });
    await formData.save();
    res.status(201).json({ message: 'Form 1 data saved successfully' });
  } catch (error) {
    console.error('Error saving form 1 data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/form2', async (req, res) => {
  const { name, email, phone, checkboxes, message } = req.body;

    try {
        const formData = new Form({ name, email, phone, checkboxes, message });
        await formData.save();
        res.status(201).json({ message: 'Form 2 data saved successfully' });
    } catch (error) {
        console.error('Error saving form 2 data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
