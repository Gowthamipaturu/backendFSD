const express = require('express');
const router = express.Router();
const {signup, login}=require('../controllers/authController');

//define routesfor signup and login
router.post('/signup', signup);
router.post('/signin', login);

module.exports = router;