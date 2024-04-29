const express = require('express');
const router = express.Router();
const {addStaff,getAllStaff,getStaffById,updateStaff,deleteStaff}=require('../controllers/staffController');

router.get('/', getAllStaff);
router.post('/', addStaff);
router.get('/', getStaffById);
router.put('/:id', updateStaff);
router.delete('/:id', deleteStaff);

module.exports = router;