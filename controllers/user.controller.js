import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';


/* USER REGISTRATION */
export const register = async (req, res) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        return res.status(401).json({
            message: "Missing or Invalid field(s).",
            success: false
        })
    }

    const user = await User.findOne({email});
    if(user) {
        return res.status(401).json({
            message: "Email is already registered!",
            success: false
        })
    }

    let hashedPassword = null;
    try {
        hashedPassword = await bcrypt.hash(password, 10);
    }
    catch (error) { 
        return res.status(500).json({
            message: "Error hashing password",
            error
        });
    }

    try {
        const newUser = new User({ username, email, password: hashedPassword });  //creates a new instance of the User model
        await newUser.save();
        res.status(201).json({ 
            message: "User registered successfully", 
            user: newUser,
            success: true 
        });
    } 
    catch (error) {
        res.status(500).json({ 
            message: "Error registering user", 
            error 
        });
    }
}