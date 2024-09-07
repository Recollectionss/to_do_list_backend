import {Router} from "express";
import UserController from "../controllers/UserController.js";

const userRouter = Router();

userRouter.post('/registry',UserController.registry);
userRouter.post('/login',UserController.login);
userRouter.post('/refresh',UserController.refreshToken);

export default userRouter;