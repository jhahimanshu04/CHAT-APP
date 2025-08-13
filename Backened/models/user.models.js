import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    
    email: { type: String, required: true },
  
    password: { type: String, required: true },
  
    confirmPassword: { type: String,  }
  
}, { timestamps: true });//createdAt and updatedAt fields will be added automatically

const User = mongoose.model("User", userSchema);
export default User;
