import User from "../models/user.js";
import bcrypt from "bcrypt";

class UserService {
    async create (username,password){
        const userExisting = await User.findOne({username});
        if(userExisting){
            throw new Error("User already exist.")
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username,password:hashedPassword});

        return await newUser.save();
    };

    async login(username,password){
        const findUser = await User.findOne({username});
        if(!findUser){
            throw new Error("User with this name not exist.");
        }

        const isMath = await bcrypt.compare(password,findUser.password);
        if (!isMath){
            throw new Error("Invalid username or password.")
        }
        return findUser;
    }
}

export default new UserService();