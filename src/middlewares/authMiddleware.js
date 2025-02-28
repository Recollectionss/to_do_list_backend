import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: "No token, auth denied"});
    }

    try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = {userId:decoded.id, username:decoded.username};
        next();
    }catch (e) {
        res.status(401).json(e);
    }
};

export default authMiddleware;