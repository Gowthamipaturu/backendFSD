const express= require('express');
const router= express.Router();
// const product= require('../models/Product');

const {getAllProducts,createProduct,updateProduct,deleteProduct}=require('../controllers/productController');
// const ProductController = require('../controllers/todoController');
router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;