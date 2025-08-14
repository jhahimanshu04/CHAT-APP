import User from '../models/user.models.js';
import bcrypt from "bcrypt"
import  createTokenAndSaveCookie from "../jwt/generateToken.js"


export const signup = async(req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
    try {
        

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }
    const user=await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
        }
        //Hashing the password
        const hash=await bcrypt.hash(password,10)
    const newUser = await new User({
        fullname,
        email,
        password: hash,
       
    });

        await newUser.save()
        if (newUser) {
            createTokenAndSaveCookie(newUser._id,res);

                res.status(201).json({ message: "User created successfully", newUser });
            }

    } catch(error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
export const login = async (req, res) => {
    try {
        const {email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(200).json({
            message: "Login successful", user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    }
    catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: "Internal server error", error: error.message });
    }
}
export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(201).json({ message: "Logout successful" });
        
    } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: "Internal server error", error: error.message });
        
    }
    

} 
