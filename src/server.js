import express from 'express';
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import connectToDB from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = 5012;

app.use(express.json());

app.use('/api/auth', userRouter);

app.use(authMiddleware);
app.use('/api/tasks' ,taskRouter);


async function startApp () {
    try {
        await connectToDB();
        app.listen(PORT, () => {
            console.log("Server has been started");
        });
    }catch (e) {
        console.log(e);
    }
}
startApp();
