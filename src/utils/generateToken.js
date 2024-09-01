import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();
export const generateToken = (user) => {
    return jwt.sign(
        {username:user.username},
        process.env.JWT_SECRET_CODE,
        {expiresIn:'1h'}
    );
}