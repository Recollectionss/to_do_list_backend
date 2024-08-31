import {Router} from "express";

const userRouter = Router();

userRouter.post('/registry');
userRouter.post('/login');

export default userRouter;