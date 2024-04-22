const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const bodyParser= require('body-parser');
const ProductRoutes = require('./routes/productRoutes');
const server = express();
// Middleware
server.use(express.json());
server.use(cors());

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://gowthamilakshmipathyk:Gowthu408@cluster0.hlpgf31.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
//   const db= mongoose.connection;
//   db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//   db.once('open',()=>console.log('Connected to MongoDB'));
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  //Routes
  // server.use('/api/products', productRoutes);
  // server.use('/api/seller', sellerRoutes);

  const PORT =4000;
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });