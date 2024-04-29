const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT= 4000;
const sellerRoutes = require('./routes/sellerRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const staffRoutes = require('./routes/staffRoutes');
// const config = require("../config");
const auth = require('./middleware/auth.js')

// Connect to MongoDB
mongoose.connect("mongodb+srv://gowthamilakshmipathyk:Gowthu408@cluster0.hlpgf31.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// //While using config.js
// mongoose.connect(config.mongodbUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api/sellers', sellerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/staff', staffRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// //While using config.js 
// app.listen(config.port, () => {
//   console.log(`Server is running on port ${config.port}`);
// });