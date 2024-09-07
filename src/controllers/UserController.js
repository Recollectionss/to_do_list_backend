import UserService from "../service/UserService.js";
import {generateAccessToken, generateRefreshToken} from "../utils/generateTokens.js";

class UserController {
    async registry (req,res){
        try {
            const {username,password} = req.body;

            if (!username || !password) {
                return res.status(400).json({ message: "Username and password are required" });
            }

            await UserService.registry(username,password);

            res.status(200);
        }catch (e) {
            res.status(500).json({message : e.message});
        }
    };

    async login (req,res){
        try {
            const {username,password} = req.body;
            const user = await UserService.login(username,password);

            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            user.refreshToken = refreshToken;
            await user.save();

            res.status(200).json({
                user,
                accessToken,
                refreshToken,
            });

        }catch (e){
            res.status(500).json({message: e.message});
        }
    }

    async refreshToken(req,res){
        try{
            const accessToken =await UserService.refreshToken(req.body);

            res.status(200).json({accessToken});

        }catch (e) {
            if (e.name === 'TokenExpiredError') {
                return res.status(403).json({ message: "Refresh token expired, please login again" });
            } else if (e.name === 'JsonWebTokenError') {
                return res.status(403).json({ message: "Invalid refresh token" });
            }
            res.status(500).json({message: e.message});
        }
    }

}

export default new UserController();