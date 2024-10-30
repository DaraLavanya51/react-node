// Creating a RESTful API using Express and MongoDB

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express(); 
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


// CREATE Operation - Insert a new user into the database
app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;
 
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and Email are required' });
        }
 
        const newUser = new User({ name, email });
 
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ message: 'Error creating user', error: err.message || err });
    }
});
 
// READ Operation - Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});
 
// READ Operation - Get a user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId); // Fetch user by ID
 
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user', error: err });
    }
});
 
// DELETE Operation - Delete a user by ID
app.delete('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
 
        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err });
    }
});
 
// UPDATE Operation - Update a user by ID
app.put('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;
 
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
 
        if (updatedUser) {
            res.status(200).json({ message: 'User updated successfully', user: updatedUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err });
    }
});

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter); 

app.listen(5000, () => console.log('Server Started'));
