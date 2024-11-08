const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Correct import for User.js

const router = express.Router();

// Sign-Up Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, 'yourSecretKey', { expiresIn: '1h' });
        res.status(201).json({ message: 'User created successfully', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Sign-In Route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });
        res.status(200).json({ message: 'Signed in successfully', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
