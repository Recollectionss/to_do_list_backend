import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: "No token, auth denied"});
    }

    try{
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    }catch (e) {
        res.status(401).json(e);
    }
};

export default authMiddleware;