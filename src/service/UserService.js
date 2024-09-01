import User from "../models/user.js";
import bcrypt from "bcrypt";

class UserService {
    async create (username,password){
        const userExisting = await User.findOne({username});
        if(userExisting){
            throw new Error("User already exist.")
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username,hashedPassword});

        return await newUser.save();
    }
}

export default new UserService();