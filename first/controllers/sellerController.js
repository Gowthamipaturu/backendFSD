const Seller = require('../models/Seller');

const createSeller = async (req, res) => {
    const seller = new Seller({
        sellerName: req.body.sellerName,
        typeOfSeller: req.body.typeOfSeller,
        aboutUs: req.body.aboutUs,
        reachUs: req.body.reachUs
    });
    try {
      const newSeller = await seller.save();
      res.status(201).json(newSeller);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const getAllSellers = async (req, res) => {
    try {
      const sellers = await Seller.find();
      res.json(sellers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const updateSeller = async (req, res) => {
    try {
      const updatedSeller = await Seller.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedSeller);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  const deleteSeller = async (req, res) => {
    try {
      await Seller.findByIdAndDelete(req.params.id);
      res.json({ message: 'Seller deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports={getAllSellers,createSeller,updateSeller,deleteSeller}