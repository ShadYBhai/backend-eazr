const express = require('express')
const User = require('./model/User')
const dotenv = require("dotenv");
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
app.use(express.json());

app.use(cors());

dotenv.config();

connectDB();

app.post('/login', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/signup', async (req, res) => {
    const { name, email, dateOfBirth } = req.body;

    const user = await User.create({
        name,
        email,
        dateOfBirth,
    });

    if (user) {
        res.status(201).json({
            name: user.name,
            email: user.email,
            dateOfBirth: user.dateOfBirth
        })
    }
    else {
        res.status(400);
        throw new Error("INVALID USER DATA");
    }
});


app.listen(5000, () => {
    console.log('app is running');
})