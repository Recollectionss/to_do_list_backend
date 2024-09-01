import UserService from "../service/UserService.js";
import {generateToken} from "../utils/generateToken.js";

class UserController {
    async registry (req,res){
        try {
            const {username,password} = req.body;

            if (!username || !password) {
                return res.status(400).json({ message: "Username and password are required" });
            }

            await UserService.create(username,password);

            res.status(200).json({message:"User has been created!"});
        }catch (e) {
            res.status(500).json({message : e.message});
        }
    };

    async login (req,res){
        try {
            const {username,password} = req.body;
            const user = await UserService.login(username,password);

            const token = generateToken(user);

            res.status(200).json({token});
        }catch (e){
            res.status(500).json({message: e.message});
        }

    }
}

export default new UserController();