import TaskService from "../service/TaskService.js";

class TaskController {
    async create (req,res){
        try{
            const {task} = req.body;
            const {userId} = req.user;
            const newTask = await TaskService.create(task,userId);
            res.status(200).json({newTask});
        }catch (e) {
            res.status(500).json({message:e.message});
        }
    }
    async getAll (req,res){
       try {
           const {userId} = req.user;
           const tasks = await TaskService.getAll(userId);

           res.status(200).json(tasks);
       }catch (e) {
           res.status(500).json({message:e.message});
       }
    }
    async getOne (req,res){
        try{
            const task = await TaskService.getOne(req.params.id);

            res.status(200).json({task});
        }catch (e) {
            res.status(500).json({message: e.message});
        }
    }
    async updateOne (req,res){
       try {
           const {task} = req.body;

           const updateTask = await TaskService.updateOne(task);

           res.status(200).json(updateTask);
       }catch (e) {
           res.status(500).json({message: e.message})
       }

    }
    async delete (req,res){
       try{
           const deletedTask = await TaskService.delete(req.params.id);
           res.status(200).json(deletedTask);
       }catch (e) {
           res.status(500).json({message:e.message});
       }
    }
}

export default new TaskController();