const Product = require('../models/Product');

const createProduct = async (req, res) => {
    const product = new Product({
        productName: req.body.productName,
        brand: req.body.brand,
        color: req.body.color,
        warranty: req.body.warranty
    });
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const getAllProducts = async (req, res) => {
    try {
      const Products = await Product.find();
      res.json(Products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  const deleteProduct = async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports={getAllProducts,createProduct,updateProduct,deleteProduct}