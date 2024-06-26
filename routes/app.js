const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

// dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://gowthamilakshmipathyk:Gowthu408@cluster0.hlpgf31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

const PORT =4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
