import {Router} from "express";

const taskRouter = Router();

taskRouter.post("/");
taskRouter.get("/");
taskRouter.get("/:id");
taskRouter.put("/");
taskRouter.delete("/:id");

export default taskRouter;