import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {generateAccessToken} from "../utils/generateTokens.js";

class UserService {
    async registry (username,password){
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

    async refreshToken (refreshToken){
        if (!refreshToken){
            throw new Error("Refresh token is required");
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        const user = await User.findOne({refreshToken});

        if(!user){
            throw new Error("Invalid refresh token")
        }

        return generateAccessToken(user);
    }
}

export default new UserService();