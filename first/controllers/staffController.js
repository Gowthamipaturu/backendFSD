const Staff = require('../models/Staff');

const addStaff = async (req, res) => {
    const staff = new Staff({
        staffid: req.body.staffid,
        name: req.body.name,
        designation: req.body.designation,
        phoneno: req.body.phoneno,
        gender: req.body.gender,
        emailid: req.body.emailid,
    });
    try {
      const newStaff = await staff.save();
      res.status(201).json(newStaff);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const getAllStaff = async (req, res) => {
    try {
      const Staff = await Staff.find();
    //   res.status(201).res.json(Staffs);
    res.json(Staff);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getStaffById = async (req, res) => {
    try {
      const staff = await Staff.findById(req.params.id);
      if(staff== null){
        res.status(404).json({message: "Staff deatails are not found"});
      }
      res.status(201).res.json(staff);
    //   res.json(getStaffById);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const updateStaff = async (req, res) => {
    try {
      const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedStaff);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  const deleteStaff = async (req, res) => {
    try {
      await Staff.findByIdAndDelete(req.params.id);
      res.json({ message: 'Staff deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports={addStaff,getAllStaff,getStaffById,updateStaff,deleteStaff}