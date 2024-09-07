import express from 'express';
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import connectToDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

const PORT = 5012;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

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
