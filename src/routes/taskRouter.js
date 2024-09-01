import {Router} from "express";
import TaskController from "../controllers/TaskController.js";

const taskRouter = Router();

taskRouter.post("/",TaskController.create);
taskRouter.get("/",TaskController.getAll);
taskRouter.get("/:id",TaskController.getOne);
taskRouter.put("/",TaskController.updateOne);
taskRouter.delete("/:id",TaskController.delete);

export default taskRouter;