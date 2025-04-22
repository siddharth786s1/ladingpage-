const User = require('../models/User');

exports.signup = async (req, res) => {
    const { name, location, genre, experience, address, email, phoneNumber, password } = req.body;

    try {
        const newUser = new User({
            name,
            location,
            genre,
            experience,
            address,
            email,
            phoneNumber,
            password
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};