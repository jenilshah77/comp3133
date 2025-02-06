const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signup);  // Ensure this POST route matches the frontend request URL
router.post('/login', login);

module.exports = router;
