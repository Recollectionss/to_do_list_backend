import express from 'express';
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";
import dotenv from 'dotenv';
import authMiddleware from "./middlewares/authMiddleware.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(authMiddleware);

app.use('/api/auth', userRouter);
app.use('/api/tasks' ,taskRouter);

app.listen(PORT, () => {
    console.log("Server has been started")
});
