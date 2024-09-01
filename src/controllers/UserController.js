import {generateToken} from "../utils/generateToken.js";
import UserService from "../service/UserService.js";

class UserController {
    async registry (req,res){
        try {
            const {username,password} = req.body;
            const user = await UserService.create(username,password);

            const token = generateToken(user);

            res.status(200).json({token});
        }catch (e) {
            res.status(500).json({message : e.message});
        }
    };

    async login (req,res){
        const {username,password} = req.body;

    }
}

export default new UserController();